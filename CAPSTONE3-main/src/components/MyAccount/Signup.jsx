import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  console.log(password, email, name);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (email != '' && password != '') {
      const result = await fetch('http://127.0.0.1:8000/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status) {
            alert(`Signed up successfully. You may now log in.`);
            setEmail('');
            setPassword('');
            navigate('/Signin');
          }
        });
    } else {
      alert('Fill out the information first');
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-5 px-5">
        <div className="form-box register">
          <form onSubmit={handleSignup}>
            <h2 className="mt-5" style={{ color: '#c4103d' }}>
              Sign Up
            </h2>

            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-user"></i>
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-envelope"></i>
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-lock-alt"></i>
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>

            <button type="submit" className="loginbtn">
              Sign Up
            </button>

            <div className="login-register">
              <p>
                Already have an account? <Link to={'/Signin'}>Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
