import swal from "sweetalert";
import { createSignal } from "solid-js";

const loginTest = () => {
  const [username, setUsername] = createSignal("");
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


  const handleRegister = async () => {
    try {
      const users = await handleFetch("/datatester/usertest.json");
      if (!users) return; // Early return if fetch failed
  
      const user = users.find(u => u.username === username());
  
      if (user) {
        swal("Error", "User already exists", "error");
      } else {
        swal("Success", "Registration successful", "success");
        // Logic to add user to the JSON (in a real app, you would send a request to the backend)
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      swal("Error", "Failed to fetch data", "error");
    }
  };
  
// const handleRegister = async () => {
//     try {
//       const response = await fetch("/datatester/usertest.json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: username(),
//           password: password(),
//         }),
//       });

//       const data = await response.json();

//       if (response.status === 201) {
//         swal("Success", data.message, "success");
//       } else {
//         swal("Success", data.message, "success");
//       }
//     } catch (error) {
//       console.error("Failed to register", error);
//       swal("Error", "Registration failed", "error");
//     }
//   };

  const handleLogin = async () => {
    const users = await handleFetch("/datatester/usertest.json");
    if (!users) return; // Early return if fetch failed

    const user = users.find(u => u.username === username());
    console.log("User found:", user);

    if (user) {
      if (user.password === password()) {
        swal("Success", "Login successful", "success");

        // Redirect to the next path or perform any other action
        console.log("Login successful, redirecting...");
      } else {
        swal("Error", "Incorrect password", "error");
        console.log("Incorrect password");
      }
    } else {
        swal("Error", "Username not found", "error");
      console.log("Username not found");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username()}
        onInput={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password()}
        onInput={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
      {message() && <p>{message()}</p>}
    </div>
  );
};

export default loginTest;
