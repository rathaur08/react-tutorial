import React,{useState} from 'react'
import UseCustomHookCount from '../UseCustomHookCount';

const UseCustom = () => {
    const [count, setCount] = useState(0);
    
    //  Custom Hook
    UseCustomHookCount(count);

    console.log("Hello useCustom");

  return (
    <div>
        <h1>{count}</h1>
        <button  className="btn" onClick={
            ()=> setCount(count +1)
        } >Click Custom 2</button>
    </div>
  )
}

export default UseCustom