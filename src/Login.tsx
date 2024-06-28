// src/components/Login.jsx
import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import styles from './Login.module.css';


const Login: Component = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email%20profile';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email';
  };

  const handleDoctorSignUpClick = () => {
    navigate('/doctor-signup');
  };

  return (
    <>
      <div class={styles.fullscreenBackground}></div>
       <div class={styles.loginContainer}>
        <h1>Welcome</h1>
        <h2>Welcome to DoctorPedia, please enter your details</h2>
        <div class={styles.section}>
          <p>Email</p>
          <input type="text" placeholder="Masukkan email..." />
          <p>Password</p>
          <input type="password" placeholder="Masukkan password..." />
        </div>
        
        <div class={styles.buttonIntegration}>
        <button class={`${styles.loginButton} ${styles.button}`}>Log In</button>
          <button class={`${styles.signupButton} ${styles.button}`} onClick={handleDoctorSignUpClick}>Doctor Sign Up</button>
          <button class={`${styles.homeButton} ${styles.button}`} onClick={handleHomeClick}>Home Page</button>
        </div>

        <div class={styles.separator}>
            <div class={styles.line}></div>
            <span class={styles.pergidanmenghilang}>Or Continue With</span>
            <div class={styles.line}></div>
        </div>
        <div class={styles.socialButtons}>
          <button class={styles.googleLogin}></button>
          <button class={styles.facebookLogin} ></button>
        </div>

      </div>
    </>
  );
};

export default Login;
