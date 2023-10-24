import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/userContext';
import Navbar from '../Navbar';

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState(false);
  console.log(password);

  useEffect(() => {
    const handleUsers = async () => {
      const data = await fetch('http://127.0.0.1:8000/api/users')
        .then((res) => res.json())
        .then((res) => {
          setUsers(res);
        });
    };
    handleUsers();
  }, []);

  console.log(users);

  const handleLogin = (e) => {
    e.preventDefault();
    users.find((element) => {
      console.log(element.email == email);
      if (element.email == email) {
        localStorage.setItem('email', element.email);
        localStorage.setItem('id', element.id);
        localStorage.setItem('name', element.name);

        alert('Login Successfully. You will now be directed to the Home page.');
        setEmail('');
        setPassword('');
        setMessage(false);
        navigate('/');
      } else {
        setMessage(true);
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="mt-5 px-5">
        <div className="form-box register">
          <form onSubmit={handleLogin}>
            <h2 style={{ color: '#c4103d' }} className="mt-5">
              Log in
            </h2>

            <div className="input-box">
              <span className="icon">
                <i className="bx bxs-envelope"></i>
              </span>
              <input
                type="email"
                value={email}
                required
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
            <button className="loginbtn">Submit</button>
            <p>
              No Account Yet? <Link to={'/Signup'}>Sign up</Link>
            </p>

            <div className="login-register"></div>
            {message && (
              <h5 className="text-center text-danger">
                User does not Exists! Please sign up.
              </h5>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
