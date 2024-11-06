import React, { useContext, useState } from 'react'
import MyContext from './Mycontent';

const Greeting = () => {
    const { token } = useContext(MyContext);
  return (
    <div>
        { token && <h1>Welcome!</h1> }
        { !token && <p>go search.</p> }
    </div>
  )
}

export default Greeting