import React, { useState } from 'react'

const ShowCirEval = () => {
  const [demo, setDemo]= useState("");
  return (
    // Short Circuit Evaluation with React | Logical && and || Operators
      <div>
        <h1 className="h1style" > { demo ||
          <>
          <h1>Sunny</h1>
          <p>CSE Engineer</p>
          </>
         }</h1>

         <h1 className="h1style" >{ demo && "Rathaur"} </h1>
      </div>
  )
}

export default ShowCirEval