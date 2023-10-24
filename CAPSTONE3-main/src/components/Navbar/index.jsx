import './style.css'
import navbarphoto2 from '../../assets/images/carouselimage/navbarphoto2.jpg';
import { MyContext } from '../../context/userContext';
import { useContext, useEffect } from 'react';
const id = localStorage.getItem('id')

const Navbar = () => {
    

    useEffect(() => {
        
        console.log(id)
    })

  return (
    <>
<nav className="navbar navbar-expand-lg bg-color bg-white text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img className='navbarphoto1' src={navbarphoto2} alt="" /></a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg><i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/MyAccount">My Account</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/About">About</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/Contact">Contact</a></li>
                       {
                            id == null ?(
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/Signup">Login</a></li>
                            ) :
                            (
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href='/Logout'>Logout</a></li>
                                
                            )
                       }
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Navbar;
