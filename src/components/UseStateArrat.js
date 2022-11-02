import React,{useState} from 'react';

const UseStateArrat = () => {
    const bioData= [
        {
            id:0, myName:"Sunny", age:23
        },
        {
            id:1, myName:"Rahul", age:25
        },
        {
            id:2, myName:"Ravi", age:26
        }
    ]
    console.log(bioData);

    // Clear Array Data Function ----------------------------
    const [myArray, setmyArray] = useState(bioData);
    const clearArray= ()=>{
        setmyArray([]);
    }
  return (
    <>
        {
            // bioData.map((curElm) =>{
            //     return <h1 className="h1style">Name : {curElm.myName} & Age : {curElm.age}</h1>
            // })

            // One Line functions --------------------------------
            myArray.map((curElm) => <h1 className="h1style" key={curElm.id}>Name : {curElm.myName} & Age : {curElm.age}</h1>)
        }
            <button  className="btn" onClick={clearArray}>Clear</button>

    </>
  )
}

export default UseStateArrat