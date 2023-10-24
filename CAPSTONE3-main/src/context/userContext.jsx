import React, { createContext } from 'react';
import { useState } from 'react';


const initialState = {
  name: '',
  email: '',
  id: null,
  enrolled: []
}

const MyContext = createContext(initialState);


export default function MyProvider({ children }){
    const [state, setState] = useState(initialState);
  
    return (
      <MyContext.Provider value={{ state, setState }}>
        {children}
      </MyContext.Provider>
    );
  }

export {MyContext}