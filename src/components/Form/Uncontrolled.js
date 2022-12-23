import React, { useRef,useState } from 'react'

const Uncontrolled = () => {

    // it like a useState only and its preserve the value. NO rerender
    const name = useRef(null);
    const[show, setShow] = useState(false);
    
    const submitForm = (e) => {
        e.preventDefault();
        const InputName= name.current.value;
        InputName === "" ? alert("plz fill the data") : setShow(true);
    }

    return (
        <div >
            <form action="" onSubmit={submitForm} autoComplete="off">
                <div>
                <label htmlFor="name">Enter your Name</label><br/>
                <input type="text" id="name" ref={name}/> 
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p> { show ? `Your Name is ${name.current.value}` : ""} </p>
        </div>
    )
}

export default Uncontrolled