import React,{useState} from 'react'

const UseStateCondition = () => {
    // let val='Sunny Rathaur';
  const [myName, setMyName] = useState('Sunny Rathaur');

  const changeName= () => {
    let val = myName;

    // React IF ELse condition -----------------------------
    // if (val === 'Sunny Rathaur') {
    //   setMyName('Sunny Rathaur CSE')
    // } else {
    //   setMyName('Sunny Rathaur')
    // }

    // If...Else (Ternary Operator)---------------------------
    (val === 'Sunny Rathaur') ?
      setMyName('Sunny Rathaur CSE'): setMyName('Sunny Rathaur');


  }
  console.log(myName);
  return (
    <div>
        <h1>{myName}</h1>
        <button  className="btn" onClick={changeName}>Click Me</button>
    </div>
  )
}

export default UseStateCondition