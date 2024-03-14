import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Register.css';
import Login from "../login/Login";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      navigate('/login'); 
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <div className="register">
        {login ? (
          <form className="registerForm" onSubmit={handleFormSubmit}>
            <h1 className="registerTitle">Register</h1>
            <div>
              <label><b>Name</b></label><br />
              <input type="text"  className="rinput"  placeholder="Enter Full name"
              name="name"  onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
              <label><b>Email</b></label><br />
              <input type="email"  className="rinput"  placeholder="Enter Email"
              onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
              <label><b>Password</b></label><br />
              <input type="password"  className="rinput"  placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)} />
            </div>
            <button type="submit" className="rbutton">
              Register
            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              <b>Already registered? </b> <span onClick={() => navigate('/login')}>Login</span>
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in a hurry! But every field is important!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default Register;
