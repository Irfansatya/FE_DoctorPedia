import { Component, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { setUsername, setUser } from './components/store'; 
import styles from "./Login.module.css";
import swal from "sweetalert";

const Login: Component = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('danaKaget')) || [];
    const user = storedUsers.find(user => user.email === email() && user.password === password());

    if (user) {
      swal("Success", "Login successful", "success");
      setUser({ email: user.email, role: user.role });  // Set user data in global store
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store logged-in user details
      navigate("/homepage");
    //   // Navigate based on user role
    //   if (user.role === "Admin") {
    //     navigate("/admin-homepage");
    //   } else if (user.role === "Doctor") {
    //     navigate("/doctor-page");
    //   } else {
    //     navigate("/homepage");
    //   }
    // } else {
    } else {
      swal("Error", "Incorrect email or password", "error");
    }
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic
  };

  const handleDocterSignUpClick = () => {
    navigate("/docter-signup");
  };

  const handleUserSignUpClick = () => {
    navigate("/user-signup");
  };

  return (
    <>
      <div class={styles.fullscreenBackground}></div>
      <div class={styles.loginContainer}>
        <div class={styles.titleSection}>
          <header class={styles.header}>DokterPedia</header>
          <h1 class={styles.h1}>Welcome</h1>
          <h2 class={styles.h2}>
            Welcome to UserPedia, please enter your details
          </h2>
        </div>

        <div class={styles.section}>
          <p class={styles.p}>Email</p>
          <input
            type="text"
            placeholder="Masukkan email..."
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
          />
          <p class={styles.p}>Password</p>
          <input
            type="password"
            placeholder="Masukkan password..."
            value={password()}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class={styles.buttonIntegration}>
          <button
            class={`${styles.loginButton} ${styles.button} ${styles.textButton}`}
            onClick={handleLogin}
          >
            Log In
          </button>
          <button
            class={`${styles.signupButton} ${styles.button} ${styles.textButton}`}
            onClick={handleDocterSignUpClick}
          >
            Docter Sign Up
          </button>
          <button
            class={`${styles.signupButton} ${styles.button} ${styles.textButton}`}
            onClick={handleUserSignUpClick}
          >
            User Sign Up
          </button>
          <button
            class={`${styles.homeButton} ${styles.button} ${styles.textButton}`}
            onClick={handleHomeClick}
          >
            Home Page
          </button>
        </div>

        <div class={styles.separator}>
          <div class={styles.line}></div>
          <span class={styles.pergidanmenghilang}>Or Continue With</span>
          <div class={styles.line}></div>
        </div>

        <div class={styles.socialButtons}>
          <button
            class={styles.googleLogin}
            onClick={handleGoogleLogin}
          ></button>
          <button
            class={styles.facebookLogin}
            onClick={handleFacebookLogin}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Login;
