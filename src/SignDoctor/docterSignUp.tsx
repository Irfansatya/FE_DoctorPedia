import { createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import styles from './docterSignUp.module.css'; // Ensure correct CSS file import

const SignUpDocter = () => {
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [doctername, setDoctername] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [mobileNumber, setMobileNumber] = createSignal('');
  const [poli, setPoli] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [confirmPassword, setConfirmPassword] = createSignal('');
  
  const [emailError, setEmailError] = createSignal('');
  const [mobileNumberError, setMobileNumberError] = createSignal('');
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

  const validateMobileNumber = (number) => {
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(number)) {
      setMobileNumberError('Mobile number must contain only digits');
      return false;
    } else {
      setMobileNumberError('');
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

  const handleSignUpDocter = () => {
    const isEmailValid = validateEmail(email());
    const isMobileNumberValid = validateMobileNumber(mobileNumber());
    const isPasswordValid = validatePassword(password());
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isMobileNumberValid && isPasswordValid && isConfirmPasswordValid) {
      // Save to localStorage
      const DocterData = {
        firstName: firstName(),
        lastName: lastName(),
        doctername: doctername(),
        email: email(),
        poli: poli(),
        mobileNumber: mobileNumber(),
        password: password(),
      };
      localStorage.setItem('DocterData', JSON.stringify(DocterData));
      
      // Proceed with sign-up logic here (e.g., make a request to the backend)
      navigate('/Login');
    }
  };

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

  const handleBerandaSignUpClick = () => {
    navigate('/Login');
  };

  return (
    <>
      <div class={styles.fullscreenBackground}></div>
      <div class={styles.loginContainer}>
        <div class={`${styles.titleSection}`}>
          <header class={`${styles.header}`}>Sign Up</header>
        </div>
        <div class={styles.formContainer}>
          <div class={styles.titleSection}>
            <div class={styles.section}>
              <p class={styles.p}>First Name</p>
              <input
                class={styles.inputcolection}
                type="text"
                placeholder="Masukkan nama depan..."
                value={firstName()}
                onInput={(e) => setFirstName(e.target.value)}
              />
              <p class={styles.p}>Last Name</p>
              <input
                class={styles.inputcolection}
                type="text"
                placeholder="Masukkan nama belakang..."
                value={lastName()}
                onInput={(e) => setLastName(e.target.value)}
              />
              <p class={styles.p}>Docter name</p>
              <input
                class={styles.inputcolection}
                type="text"
                placeholder="Masukkan nama Dokter..."
                value={doctername()}
                onInput={(e) => setDoctername(e.target.value)}
              />
              <p class={styles.p}>E-mail</p>
              <input
                class={styles.inputcolection}
                type="text"
                placeholder="Masukkan e-mail..."
                value={email()}
                onInput={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
              {emailError() && <p class={styles.error}>{emailError()}</p>}
            </div>
            <div class={styles.section}>
              <p class={styles.p}>Mobile Number</p>
              <input
                class={styles.inputcolection}
                type="text"
                placeholder="Masukkan nomor Telepon..."
                value={mobileNumber()}
                onInput={(e) => {
                  setMobileNumber(e.target.value);
                  validateMobileNumber(e.target.value);
                }}
              />
              <p class={styles.p}>Poli / Spesialis</p>
              <input
                class={styles.inputcolection}
                type="text"
                placeholder="Masukkan Poli anda..."
                value={poli()}
                onInput={(e) => setPoli(e.target.value)}
              />
              {mobileNumberError() && <p class={styles.error}>{mobileNumberError()}</p>}
              <p class={styles.p}>Password</p>
              <input
                class={styles.inputcolection}
                type="password"
                placeholder="Masukkan password..."
                value={password()}
                onInput={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
              />
              
              {passwordError() && <p class={styles.error}>{passwordError()}</p>}
              <p class={styles.p}>Password Confirmation</p>
              <input
                class={styles.inputcolection}
                type="password"
                placeholder="Masukkan password..."
                value={confirmPassword()}
                onInput={(e) => {
                  setConfirmPassword(e.target.value);
                  validateConfirmPassword();
                }}
              />
              {confirmPasswordError() && <p class={styles.error}>{confirmPasswordError()}</p>}
            </div>
          </div>
        </div>
        <div class={styles.buttonIntegration}>

          <button class={`${styles.signupButton} ${styles.button} ${styles.textButton}`} onClick={handleSignUpDocter}>Sign Up as Doctor</button>
          <button class={`${styles.signupButton} ${styles.button} ${styles.textButton}`} onClick={handleBerandaSignUpClick}>Back to Login</button>
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

export default SignUpDocter;
