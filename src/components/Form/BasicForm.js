import React, { useState } from 'react'

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e)=>{
    e.preventDefault();

    // you can use Object Destructuring
    const newEntry = {email: email, password: password};

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  
  return (
    // Create Login Form with React
    <>

        <form action="" onSubmit={submitForm}> 
          <div>
              <lable htmlFor="email">Email</lable>
              <input type="text" name="email" id="email"  autoComplete="off" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
          </div>

          <div>
              <lable htmlFor="password">Password</lable>
              <input type="password" name="password" id="password" autoComplete="off" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
          </div>
          <button type="submit">Login</button>

        </form>

        <div>
          {
            allEntry.map((curElem)=>{
              return(

                <div className="dataStyles">
                  <p>{curElem.email}</p>
                  <p>{curElem.password}</p>
                </div>
              )
            })
          }
        </div>

    </>
  )
}

export default BasicForm