import  React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
  // let val='Sunny Rathaur';
  const [myName, setMyName] = useState('Sunny Rathaur');

  const changeName= () => {
    // if (condition) {
      
    // } else {
      
    // }
    setMyName('Sunny Rathaur CSE')
  }
  console.log(myName);


  return (
    <div>
      <h1>{myName}</h1>
      <button  className="btn" onClick={changeName}>Click Me</button>
    </div>
  )
}

export default App