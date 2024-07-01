import { createResource } from 'solid-js';
import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import styles from './Login.module.css'; // Ensure correct CSS file import


const fetchAcc = async () => {
  const res = await fetch('http://localhost:4000/user')

  return res.json()
}

const[account] = createResource(fetchAcc)


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

  
  const handleDocterSignUpClick = () => {
    navigate('/docter-signup');
  };
  const handleUserSignUpClick = () => {
    navigate('/user-signup');
  };

  const handleLogin = async () => {
    const email = (document.querySelector<HTMLInputElement>('input[type="text"]') as HTMLInputElement).value;
    const password = (document.querySelector<HTMLInputElement>('input[type="password"]') as HTMLInputElement).value;
  
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Login response:', data); // Log the response for debugging
  
      // Assuming your backend sends a JSON object with a message on failure
      if (!data.success) {
        throw new Error(data.message || 'Login failed');
      }
  
      // Arahkan ke halaman utama jika login berhasil
      navigate('/about');
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed'); // Display user-friendly error message
    }
  };  

  
  

  return (
    <>
      <div class={styles.fullscreenBackground}></div>
      <div class={styles.loginContainer}>
        <div class={`${styles.titleSection}`}>
          <header class={`${styles.header}`}>DokterPedia</header>
          <h1 class={`${styles.h1}`}>Welcome</h1>
          <h2 class={`${styles.h2}`}>Welcome to DoctorPedia, please enter your details</h2>
        </div>

        <div class={styles.section}>
          <p class={styles.p}>Email</p>
          <input type="text" placeholder="Masukkan email..." />
          <p class={styles.p}>Password</p>
          <input type="password" placeholder="Masukkan password..." />
        </div>
        
        <div class={styles.buttonIntegration}>
          <button class={`${styles.loginButton} ${styles.button} ${styles.textButton}`} onClick={handleLogin}>Log In</button>
          <button class={`${styles.signupButton} ${styles.button} ${styles.textButton}`} onClick={handleDocterSignUpClick}>Docter Sign Up</button>
          <button class={`${styles.signupButton} ${styles.button} ${styles.textButton}`} onClick={handleUserSignUpClick}>User Sign Up</button>
          <button class={`${styles.homeButton} ${styles.button} ${styles.textButton}`} onClick={handleHomeClick}>Home Page</button>
        </div>

        <div class={styles.separator}>
          <div class={styles.line}></div>
          <span class={styles.pergidanmenghilang}>Or Continue With</span>
          <div class={styles.line}></div>
        </div>

        <div class={styles.socialButtons}>
          <button class={styles.googleLogin} onClick={handleGoogleLogin}></button>
          <button class={styles.facebookLogin} onClick={handleFacebookLogin}></button>
        </div>
      </div>
    </>
  );
};

export default Login;

