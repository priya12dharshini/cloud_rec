import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Home from "../home/Home";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [main, setMain] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("priyaPassword")?.replace(/"/g, ""); // Safely retrieve from localStorage
    let mail = localStorage.getItem("priyaEmail")?.replace(/"/g, ""); // Safely retrieve from localStorage

    if (!emaillog || !passwordlog) {
      setFlag(true);
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setMain(!main);
      setFlag(false);
      navigate("/home"); // Navigate to the Home component
    }
  }

  return (
    <div className="login">
      {main ? (
        <form className="loginForm" onSubmit={handleLogin}>
          <h3 className="loginTitle">Login</h3>
          <div>&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-user"></i>&nbsp;&nbsp;
            <label><b>Email</b></label><br/>
            <input
              type="email"
              className="linput"
              placeholder="Enter Email"
              onChange={(event) => setEmaillog(event.target.value)}
            /><br/><br/>
          </div>
          <div>&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-lock"></i>&nbsp;&nbsp;
            <label><b>Password</b></label><br/>
            <input
              type="password"
              className="linput"
              placeholder="Enter Password"
              onChange={(event) => setPasswordlog(event.target.value)}
            /><br/><br/>
          </div>
          <button type="submit" className="lbutton" onClick={() => navigate('/home')}>
            Login
          </button>
          {flag && (
            <Alert variant="warning">
              Fill in the correct info, or keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
