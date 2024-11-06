import React, { useContext, useState } from 'react';
import axios from 'axios';
import MyContext from './Mycontent';

const Log_in = () => {
  const SERVER = 'http://127.0.0.1:8000/login/';
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const { settoken } = useContext(MyContext);

  const send_data = () => {
    axios.post(SERVER, { username, password })
      .then(res => { settoken(res.data.access); })
      .catch(err => { console.error(err); });
      
  };

  
  return (
    <div>
      Login: <input value={username} onChange={(e) => setusername(e.target.value)} /> <br />
      Password: <input value={password} onChange={(e) => setpassword(e.target.value)} /> <br />
      <button onClick={send_data}>Send</button>
    </div>
  );
};

export default Log_in;