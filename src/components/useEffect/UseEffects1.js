import React, { useEffect, useState } from 'react'

const UseEffects1 = () => {

     const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("I am first one");
      if (count >= 1) {
        document.title = `Chats (${count })`
      } else {
        document.title = `Chats `
      }
    },[count]);

    useEffect(() => {
      console.log("I am fine");
    },[]);
    
    console.log("Hello useEffect");
    
  return (
    <div>
        <h1>{count}</h1>
        <button  className="btn" onClick={
            ()=> setCount(count +1)
        } >Clicks</button>
    </div>
  )
}

export default UseEffects1