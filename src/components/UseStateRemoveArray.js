import React,{useState } from 'react'

const UseStateRemoveArray = () => {
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

    // Remove Row Element One by one
    const removeElemment= (id) =>{
        // alert(id);
        const myNewArray = myArray.filter((curElem)=>{
            return curElem.id !== id;
        })
        setmyArray(myNewArray);

    }

  return (
    <>
    {/* React Hook Challenge #2: Create a Basic TODO List | UseState Remove array Function */}
        {
            //Kuch hua hai kya 

            myArray.map((curElm) =>{
               return(

                   <h1 className="h1style" key={curElm.id}>Name :
                    {curElm.myName} & Age : {curElm.age}
                    <button  className="btnInner" onClick={ () => removeElemment(curElm.id)}>Remove</button>
                    </h1>

               ) ;
            } )
        }
            <button  className="btn" onClick={clearArray}>Clear</button>

    </>
  )
}

export default UseStateRemoveArray