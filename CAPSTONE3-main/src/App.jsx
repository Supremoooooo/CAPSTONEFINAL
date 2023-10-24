import React, { useContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header/index';
import ContactUsForm from './components/ContactUs';
import About from './components/About';
import MyAccount from './components/MyAccount'; 
import Signup from './components/MyAccount/signup';
import Signin from './components/MyAccount/signin';
import MyProvider from './context/userContext';
import { MyContext } from './context/userContext';
import Logout from './components/MyAccount/Logout';

const App = () => {
  const {state, setState} = useContext(MyContext);


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path:'/Header',
      element: <Header />,
    },
    {
      path:'/Contact',
      element:<ContactUsForm />
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path: '/Myaccount',
      element:<MyAccount />
    },
    {
      path: '/Signup',
      element:<Signup />
    },
    {
      path: '/Signin',
      element:<Signin/>
    },
    {
      path: '/Logout',
      element:<Logout/>
    }
  ]);

  return (
    <>
    {/* <h1>hi</h1> */}
      <MyProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </MyProvider>
    </>
  );
};
export default App;
