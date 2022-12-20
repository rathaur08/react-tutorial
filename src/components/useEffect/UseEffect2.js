import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

    const [widthCount, setwidthCount] = useState(window.screen.width);

    const actualWidth = ()=> {
        console.log(window.innerWidth);
        setwidthCount(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", actualWidth);

        return () => {
            window.removeEventListener("resize", actualWidth);
        }
      });

  return (
    <div>
        <h1>The actule size of the Window is:</h1>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffect2