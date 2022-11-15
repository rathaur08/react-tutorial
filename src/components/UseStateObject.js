import React from 'react'

const UseStateObject = () => {
  const [myObject, setmyObject] = React.useState({
    myName:" Sunny", myAge:"23 ", degree:" B.Tech",
  });
  const changeObject=()=>{
    setmyObject({...myObject, myName:" Sunny Rathaur"});
  };
  return (
    <div>
        <h1 className='h1style'>Name : {myObject.myName} & Age : {myObject.myAge} and Degree :{myObject.degree}</h1>
        <button  className="btn" onClick={changeObject}>UPDate</button>
    </div>

  )
}

export default UseStateObject