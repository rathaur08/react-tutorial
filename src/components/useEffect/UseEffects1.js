import React, { useEffect, useState } from 'react'

const UseEffects1 = () => {

     const [count, setCount] = useState(0);

    useEffect(() => {
       document.title = `Chats (${count +1 })`
    });
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