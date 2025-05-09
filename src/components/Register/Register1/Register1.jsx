import React, { useState } from 'react';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
export default function RegisterPage1({
  name, setName,
  number, setNumber,
  dob, setDob,
  city, setCity,
  tshirt, setTshirt,
  short, setShort,
  food, setFood,
  stay, setStay,
  nextStep
}) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!name.trim() || !number.trim() || !dob || !city.trim() || !tshirt || !short || !food || !stay) {
      console.log(dob)
      console.log(!name.trim(), !number.trim() , !dob , !city.trim() , !tshirt , !short , !food , !stay)
      setError("All fields are required. Please make sure nothing is left empty.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <section className={styles.register}>
      <Link to = "/" ><button className={styles.nextButton}>Back to Home</button></Link>
      <h1>Registration Form</h1>
      <p>Please fill in your details</p>

      {error && <div className={styles.error}>{error}</div>}

      <h2>Step 1: General Details</h2>

      <label htmlFor="name">Name *</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="number">WhatsApp Number *</label>
      <input type="tel" id="number" value={number} onChange={(e) => setNumber(e.target.value)} required />

      <label htmlFor="dob">Date of Birth *</label>
      <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />

      <label htmlFor="city">City *</label>
      <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />

      <label htmlFor="tshirt">T-Shirt Size *</label>
      <select id="tshirt" value={tshirt} onChange={(e) => setTshirt(e.target.value)} required>
        <option value="">Select your T-shirt size</option>
        <option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option>
      </select>

      <label htmlFor="short">Shorts Size *</label>
      <select id="short" value={short} onChange={(e) => setShort(e.target.value)} required>
        <option value="">Select your shorts size</option>
        <option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option>
      </select>

      <label>Gala Dinner Food Preference *</label>
      <div className={styles.radioGroup}>
        <label><input type="radio" name="food" value="Non-Vegetarian" checked={food === "Non-Vegetarian"} onChange={(e) => setFood(e.target.value)} /> Non-Vegetarian</label>
        <label><input type="radio" name="food" value="Vegetarian" checked={food === "Vegetarian"} onChange={(e) => setFood(e.target.value)} /> Vegetarian</label>
        <label><input type="radio" name="food" value="Not Attending" checked={food === "Not Attending"} onChange={(e) => setFood(e.target.value)} /> I won't be there</label>
      </div>

      <label>Do you want stay arranged? *</label>
      <div className={styles.radioGroup}>
        <label><input type="radio" name="stay" value="Yes" checked={stay === "Yes"} onChange={(e) => setStay(e.target.value)} /> Yes</label>
        <label><input type="radio" name="stay" value="No" checked={stay === "No"} onChange={(e) => setStay(e.target.value)} /> No</label>
      </div>

      <button className={styles.nextButton} onClick={handleNext}>Next</button>
    </section>
  );
}
