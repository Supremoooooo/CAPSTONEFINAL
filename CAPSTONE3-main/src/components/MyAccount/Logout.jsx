import React, { useContext, useEffect, useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';


function Logout() {
    const navigate = useNavigate();
   
    localStorage.clear();

    navigate('/Signin');

    // alert('logging out');

   useEffect(() => {
    navigate('/Signin');
   },[])

  return (
   <div></div>
  );
}

export default Logout;

