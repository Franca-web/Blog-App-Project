import React, { useState } from "react";
//import '../styles/Auth.css';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleUsernameOnChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordOnChange(event) {
    setPassword(event.target.value);
  }
  function loginUser(event) {
    event.preventDefault();
    if (username === password) {
      alert("Welcome");
    } else {
      alert("Invalid credentials");
    }
  }
  return (
    <div className={"auth-container"}>
      <form className={"auth"} onSubmit={loginUser}>
        <input
          onChange={handleUsernameOnChange}
          value={username}
          type={"text"}
          placeholder={"Enter your username"}
        />
        <input
          onChange={handlePasswordOnChange}
          value={password}
          type={"password"}
          placeholder={"Enter your password"}
        />
        <button type={"submit"}>Login</button>
      </form>
    </div>
  );
}
export default Login;
