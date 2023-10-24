import React, { useState } from 'react';
import './style.css'

function LoginForm() {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleRegisterClick = () => {
    setIsLoginActive(false);
  };

  const handleLoginClick = () => {
    setIsLoginActive(true);
  };

  return (
    <div>
      <div className="loginbackground"></div>
      <div className="logincontainer">
        <div className="content">
          {/* <img className="logo" src="Images/logo.png" alt="logo" /> */}

          <div className="text-sci">
            <p>Our furniture is crafted with the utmost precision and care, ensuring durability and longevity.</p>

            <div className="loginsocials">
              <a href=""><i className='bx bxl-facebook'></i></a>
              <a href=""><i className='bx bxl-twitter'></i></a>
              <a href=""><i className='bx bxl-youtube'></i></a>
              <a href=""><i className='bx bxl-gmail'></i></a>
            </div>
          </div>
        </div>

        <div className={`logreg-box ${isLoginActive ? 'active' : ''}`}>
          <div className="form-box login">
            <form action="#">
              <h2 style={{ color: '#c4103d' }}>Sign In</h2>

              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="email" required />
                <label>Email</label>
              </div>

              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                <input type="password" required />
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label><input type="checkbox" /> Remember me</label>
                <a href="#">Forgot password?</a>
              </div>

              <button type="submit" className="btn">Sign In</button>

              <div className="login-register">
                <p>
                  Don't have an account?{' '}
                  <a href="#" className="register-link" style={{ color: '#c4103d' }} onClick={handleRegisterClick}>
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Second section */}
          <div className="form-box register">
            <form action="#">
              <h2 style={{ color: '#c4103d' }}>Sign Up</h2>

              <div className="input-box">
                <span className="icon"><i className='bx bxs-user'></i></span>
                <input type="text" required />
                <label>Name</label>
              </div>

              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="email" required />
                <label>Email</label>
              </div>

              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                <input type="password" required />
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label><input type="checkbox" /> I agree to the terms & conditions</label>
              </div>

              <button type="submit" className="loginbtn">Sign Up</button>

              <div className="login-register">
                <p>
                  Already have an account?{' '}
                  <a href="#" className="login-link" style={{ color: '#c4103d' }} onClick={handleLoginClick}>
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

