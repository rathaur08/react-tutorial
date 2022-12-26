import React, { useEffect, useState } from 'react'
import UseCustomHookCount from './UseCustomHookCount';

const UseEffectsCustom = () => {

     const [count, setCount] = useState(0);
    //  Custom Hook
    UseCustomHookCount(count);
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

export default UseEffectsCustom;