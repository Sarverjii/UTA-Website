import React, { useState, useEffect } from 'react';
import styles from './Register.module.css';
import { FetchPartners } from '../../../Firebase/FetchPartners';
import { TBL_Players } from '../../../Firebase/firebase-config';

export default function RegisterPage2({
  name,
  event1, setEvent1,
  event2, setEvent2,
  partner1, setPartner1,
  partner2, setPartner2,
  Submit,
  prevStep,
}) {
  const [error, setError] = useState("");
  const [partnersdata, setPartnersData] = useState([]);
  const [playersdata, setPlayersData] = useState([]);
  const [event1partners, setEvent1Partners] = useState([]);
  const [event2partners, setEvent2Partners] = useState([]);

  const events = [
    "Category A (Open)",
    "Category B (90+ combined)",
    "Category C (105+ combined)",
    "Category D (120+ combined)"
  ];


 const getPlayerName = (userId) => {
  const player = playersdata.find(p => p.id === userId);
  return player ? player.Name : "Unknown Player";
};


  useEffect(() => {
    const fetchData = async () => {
      const result = await FetchPartners();
      setPartnersData(result.TBL_Partners);
      setPlayersData(result.TBL_Players)
    };
    fetchData();
  }, []);

  useEffect(() => {
    const options = partnersdata.filter(player =>
      (player.eventName === event1 && player.partnerId === null) 
    );
    setEvent1Partners(options);
  }, [partnersdata, event1]);

  useEffect(() => {
    const options = partnersdata.filter(player =>
      (player.eventName === event2 && player.partnerId === null) 
    );
    setEvent2Partners(options);
  }, [partnersdata, event2]);


  const handleNext = () => {
    if (!event1 || !partner1) {
      setError("Please select the first event and choose a partner.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (event2 && event1 === event2) {
      setError("Event 2 cannot be the same as Event 1.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (event2 && !partner2) {
      setError("Please choose a partner for Event 2.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setError("");
    Submit();
  };

  return (
    <section className={styles.register}>
      <h2>Step 2: Tournament Details</h2>
      <p>Welcome <strong>{name}</strong>! Let's continue your registration.</p>

      {error && <p className={styles.error}>{error}</p>}

      {/* Event 1 */}
      <label htmlFor="event1">Select Your First Event *</label>
      <select id="event1" value={event1} onChange={(e) => {
        setEvent1(e.target.value);
        setPartner1("");
      }} required>
        <option value="">-- Select Event --</option>
        {events.map((e, i) => (
          <option key={i} value={e}>{e}</option>
        ))}
      </select>

      <label htmlFor="partner1">Partner for First Event *</label>
      <select
        id="partner1"
        value={partner1 === "Partner not Registered" ? "Partner not Registered" : partner1 || ""} // Match by ID, not name
        onChange={(e) => {
          const selectedId = e.target.value;

          if (selectedId === "Partner not Registered") {
            setPartner1("Partner not Registered");
            console.log("Part 2")
          } else {
            const selectedPlayer = playersdata.find(p => p.id === selectedId); // Use userId for matching
            if (selectedPlayer) {
              setPartner1(selectedPlayer.id); 
              
            }
          }
        }}
        required
      >
        <option value="">-- Select Partner --</option>
        <option value="Partner not Registered">Partner not Registered</option>
        {event1partners.map((player) => (
          <option key={player.userId} value={player.userId}> {/* Use userId as value */}
            {getPlayerName(player.userId)} {/* Display the player name */}
          </option>
        ))}
      </select>


      {/* Event 2 */}
      <label htmlFor="event2">Select Your Second Event (Optional)</label>
      <select
        id="event2"
        value={event2}
        onChange={(e) => {
          setEvent2(e.target.value);
          setPartner2("");
        }}
      >
        <option value="">-- None --</option>
        {events.filter(e => e !== event1).map((e, i) => (
          <option key={i} value={e}>{e}</option>
        ))}
      </select>

      {event2 && (
        <>
          <label htmlFor="partner2">Partner for Second Event *</label>
          <select
            id="partner2"
            value={partner2 === "Partner not Registered" ? "Partner not Registered" : partner2 || ""}
            onChange={(e) => {
              const selectedId = e.target.value;

              if (selectedId === "Partner not Registered") {
                setPartner2("Partner not Registered");
              } else {
                const selectedPlayer = playersdata.find(p => p.id === selectedId); // Use playersdata just like for partner1
                if (selectedPlayer) {
                  setPartner2(selectedPlayer.id); // Store userId as partner2
                }
              }
            }}
            required
          >
            <option value="">-- Select Partner --</option>
            <option value="Partner not Registered">Partner not Registered</option>
            {event2partners.map((player) => (
              <option key={player.userId} value={player.userId}>
                {getPlayerName(player.userId)}
              </option>
            ))}
          </select>
        </>
      )}


      {/* Buttons */}
      <div className={styles.buttonGroup}>
        <button className={styles.nextButton} onClick={prevStep}>Back</button>
        <button className={styles.nextButton} onClick={handleNext}>Next</button>
      </div>
    </section>
  );
}
