import React from 'react';
import styles from './Register3.module.css';
import { Link } from 'react-router-dom';

export default function Register3({ loading, messagefromserver }) {
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>Submitting...</div>
      ) : (
        <div className={styles.messageBox}>
          <h2 className={styles.heading}>Registration Status</h2>
          <p className={styles.message}>{messagefromserver}</p>
          <Link to="/"><button className={styles.button}>Back to Home</button></Link>
        </div>
      )}
    </div>
  );
}
