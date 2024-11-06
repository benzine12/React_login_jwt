import React, { useState } from 'react';
import './App.css';
import Log_in from './Log_in';
import MyContext from './Mycontent';
import Greeting from './Greeting';

function App() {
  const [token, settoken] = useState('')
  return (
    <div className="container">
      <MyContext.Provider value={{token,settoken}}>
      <Log_in className="leftDiv" />
      <Greeting className="rightDiv" />
      </MyContext.Provider>
    </div>
  );
}
export default App;