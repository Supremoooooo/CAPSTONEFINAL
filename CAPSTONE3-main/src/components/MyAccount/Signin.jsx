import React, { useContext, useState } from 'react';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/userContext';

function Signin() {
   
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([])
    console.log(password)


   const handleLogin = async (e) => {
    e.preventDefault();

    if(email != '' && password != ''){
        const result = fetch('http://127.0.0.1:8002/api/users').then(res => res.json()).then(res => {
          console.log(result)
            setUsers(res)
            console.log(users)
            users.forEach(element => {
                console.log(element)
                if(element.email == email){
                    localStorage.setItem('email', element.email)
                    localStorage.setItem('id', element.id)
                    localStorage.setItem('name', element.name)
                }
            })
            alert('Login Successfully!')
            setEmail('')
            setPassword('')
            
            navigate('/')
        })
        
    } else {
        alert('Fill out the information first')
    }
   }

  return (
    <div>
          <div className="form-box register">
            <form onSubmit={handleLogin}>
              <h2 style={{ color: '#c4103d' }}>Log in</h2>

              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="email" value={email} required onChange={e => setEmail(e.target.value)}/>
                <label>Email</label>
              </div>

              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                <input type="password" required onChange={e => setPassword(e.target.value)}/>
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label><input type="checkbox" /> I agree to the terms & conditions</label>
              </div>
              <button className="loginbtn">Submit</button>
              <p>
                  No Account Yet?{' '}
                  <Link to={'/Signup'}>Sign up</Link>
                </p>

              <div className="login-register">
              </div>
            </form>
          </div>
    </div>
  );
}

export default Signin;

