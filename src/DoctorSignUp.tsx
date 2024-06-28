import { createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import styles from './DoctorSignUp.module.css';

const DoctorSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [confirmPassword, setConfirmPassword] = createSignal('');
  const [emailError, setEmailError] = createSignal('');
  const [passwordError, setPasswordError] = createSignal('');
  const [confirmPasswordError, setConfirmPasswordError] = createSignal('');

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const validateConfirmPassword = () => {
    if (password() !== confirmPassword()) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    } else {
      setConfirmPasswordError('');
      return true;
    }
  };

  const handleSignUp = () => {
    const isEmailValid = validateEmail(email());
    const isPasswordValid = validatePassword(password());
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      localStorage.setItem('signupEmail', email());
      navigate('/Login');
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div class={styles.signupContainer}>
      <h1>Doctor Sign Up</h1>
      <div class={styles.section}>
        <p>Email</p>
        <input
          type="text"
          placeholder="Enter email..."
          value={email()}
          onInput={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
        {emailError() && <p class={styles.error}>{emailError()}</p>}
        <p>Password</p>
        <input
          type="password"
          placeholder="Enter password..."
          value={password()}
          onInput={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
        />
        {passwordError() && <p class={styles.error}>{passwordError()}</p>}
        <p>Confirm Password</p>
        <input
          type="password"
          placeholder="Confirm password..."
          value={confirmPassword()}
          onInput={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmPassword();
          }}
        />
        {confirmPasswordError() && <p class={styles.error}>{confirmPasswordError()}</p>}
      </div>
      <div class={styles.buttonSection}>
        <button class={`${styles.signupButton} ${styles.button}`} onClick={handleSignUp}>Sign Up</button>
        <button class={`${styles.homeButton} ${styles.button}`} onClick={handleHomeClick}>Home Page</button>
      </div>
    </div>
  );
};

export default DoctorSignUp;
