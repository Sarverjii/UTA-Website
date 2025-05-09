import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/tennis.png" alt="Tennis Ball" className={styles.logo} />
        </div>
        <h1 className={styles.mainTitle}>Uttaranchal Tennis Association</h1>
        <h2 className={styles.subTitle}>Nissan All India Open Seniors Tennis Tournament 2024</h2>
        <p className={styles.date}>Dehradun | December 8-9, 2024</p>
        <div className={styles.buttonContainer}>
          <button className={styles.registerButton}>Register Now</button>
          <button className={styles.loginButton}>User Login</button>
          <button className={styles.adminButton}>Admin Login</button>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.tournamentDetails}>
          <h2 className={styles.sectionTitle}>Tournament Details</h2>
          
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3>Categories & Format</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.twoColumns}>
                <div>
                  <h4>Tournament Categories:</h4>
                  <ul className={styles.bulletList}>
                    <li>Category A (Open)</li>
                    <li>Category B (90+ combined)</li>
                    <li>Category C (105+ combined)</li>
                    <li>Category D (120+ combined)</li>
                    <li>Lucky Doubles</li>
                  </ul>
                  <p className={styles.note}>
                    This is a <strong>Doubles Tournament Only</strong><br />
                    Age Limit: <strong>30 years</strong> (calculated as running age as on December 9)
                  </p>
                </div>
                <div>
                  <h4>Lucky Doubles Format:</h4>
                  <p>Any participant who loses both matches in the first round or loses in the first round of a single event will be eligible.</p>
                  <h5>Pairing Logic:</h5>
                  <ul className={styles.bulletList}>
                    <li>Participants divided into X (Age ≤ 50) and Y (Age &gt; 50) categories</li>
                    <li>Each pair will have one person from X and one from Y based on lottery system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3>Entry & Participation</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.twoColumns}>
                <div>
                  <h4>Entry Rules:</h4>
                  <ul className={styles.bulletList}>
                    <li>One player can participate in max 2 categories (excluding Lucky Doubles)</li>
                    <li>Coaches are allowed to play in Category A only</li>
                    <li>Maximum draw size in any category is 32</li>
                    <li>Please carry age proof with you</li>
                  </ul>
                </div>
                <div>
                  <h4>Entry Fees:</h4>
                  <p>Two events: ₹4,500</p>
                  <p>Two events with accommodation: ₹6,000 (double sharing up to 2 days)</p>
                  <p>One event: ₹3,000</p>
                  <p>One event with accommodation: ₹4,500 (double sharing up to 2 days)</p>
                  <p className={styles.lastDate}>Last date for entry fees: December 7, 2024</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3>Prizes & Benefits</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.twoColumns}>
                <div>
                  <h4>Prize Money:</h4>
                  <ul className={styles.bulletList}>
                    <li>Winner team: ₹21,000</li>
                    <li>Runners-up team: ₹11,000</li>
                    <li>Semi-Finalist teams: ₹4,000 each</li>
                    <li>Lucky Doubles: 50% of regular prizes</li>
                  </ul>
                </div>
                <div>
                  <h4>Participant Benefits:</h4>
                  <ul className={styles.bulletList}>
                    <li>Breakfast and Lunch on both days</li>
                    <li>Gala dinner on December 9</li>
                    <li className={styles.highlight}>Every participant receives Indian Tree T-Shirt, Shorts, Socks, Cap, Wristband (MRP more than ₹3,000)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h3>Venue & Important Information</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.twoColumns}>
                <div>
                  <h4>Venues:</h4>
                  <p><strong>Tournament:</strong> Shanti Tennis Academy, Dehradun</p>
                  <p><strong>Gala Party & Stay:</strong> OM farms, 8-A, Jogiwala, Badripur, Dehradun</p>
                  <p><strong>Courts:</strong> 4 hard courts + 4 additional hard courts at nearby venue if required</p>
                </div>
                <div>
                  <h4>Important Information:</h4>
                  <ul className={styles.bulletList}>
                    <li>Draws and Order of Play published on December 8</li>
                    <li>Walk-over given if team doesn't appear within 15 minutes of scheduled time</li>
                    <li>Tournament balls: Head Tour</li>
                    <li>For queries contact Tournament Director: Sumit Goel (Ph. 9412977857)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </main>
      <section className={styles.callToAction}>
          <h2>Ready to Participate?</h2>
          <p>Join us for an exciting tennis tournament with great prizes and networking opportunities!</p>
          <div className={styles.ctaButtons}>
            <button className={styles.registerButton}>Register Now</button>
            <button className={styles.playersButton}>View Registered Players</button>
          </div>
          <p className={styles.whatsappNote}>
            After registration, join the participants WhatsApp group:
            <br />
            <a href="https://chat.whatsapp.com/JTvbjXSOolF7Kl5QRr46DY" target="_blank" rel="noopener noreferrer">
              https://chat.whatsapp.com/JTvbjXSOolF7Kl5QRr46DY
            </a>
          </p>
        </section>
        <footer className={styles.footer}>
            <div>
                <h2>Uttaranchal Tennis Association</h2>
                <h4>Promoting tennis excellence in Uttaranchal</h4>
                <Link to="/Admin-Login">Admin Login</Link>
            </div>
            <div>
                <p>© 2024 Uttaranchal Tennis Association <br /> All rights reserved</p>
            </div>
        </footer>
    </div>
  );
}