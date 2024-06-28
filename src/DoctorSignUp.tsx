import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import styles from './DoctorSignUp.module.css';

const DoctorSignUp: Component = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add the functionality for doctor sign up here
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div class={styles.signupContainer}>
      <h1>Doctor Sign Up</h1>
      
      <div class={styles.section}>
        <p>Email</p>
        <input type="text" placeholder="Enter email..." />
        <p>Password</p>
        <input type="password" placeholder="Enter password..." />
        <p>Confirm Password</p>
        <input type="password" placeholder="Confirm password..." />
      </div>
      
      <div class={styles.buttonSection}>
        <button class={`${styles.signupButton} ${styles.button}`} onClick={handleSignUp}>Sign Up</button>
        <button class={`${styles.homeButton} ${styles.button}`} onClick={handleHomeClick}>Home Page</button>
      </div>
    </div>
  );
};

export default DoctorSignUp;
