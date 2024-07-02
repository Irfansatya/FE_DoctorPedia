import { Component, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { setUsername } from './components/store'; 
import styles from "./Login.module.css";
import swal from "sweetalert";

const Login: Component = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [message, setMessage] = createSignal("");

  const handleFetch = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched data:", data);
      return data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
      swal("Error", "Failed to fetch data", "error");
      return null;
    }
  };

  // const handleRegister = async () => {
  //   try {
  //     const users = await handleFetch("/datatester/usertest.json");
  //     if (!users) return; // Early return if fetch failed

  //     const user = users.find(u => u.email === email());

  //     if (user) {
  //       swal("Error", "User already exists", "error");
  //     } else {
  //       swal("Success", "Registration successful", "success");
  //       // Logic to add user to the JSON (in a real app, you would send a request to the backend)
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //     swal("Error", "Failed to fetch data", "error");
  //   }
  // };

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

  const handleLogin = async () => {
    const users = await handleFetch("/datatester/usertest.json");
    if (!users) return;
  
    const user = users.find((u) => u.email === email());
    console.log("User found:", user);
  
    if (user) {
      if (user.password === password()) {
        swal("Success", "Login successful", "success");
        setUsername(user.username);
        navigate("/coy");
      } else {
        swal("Error", "Incorrect password", "error");
      }
    } else {
      swal("Error", "Username not found", "error");
    }
  };  

  return (
    <>
      <div class={styles.fullscreenBackground}></div>
      <div class={styles.loginContainer}>
        <div class={styles.titleSection}>
          <header class={styles.header}>DokterPedia</header>
          <h1 class={styles.h1}>Welcome</h1>
          <h2 class={styles.h2}>
            Welcome to DoctorPedia, please enter your details
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
          {message() && <p>{message()}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
