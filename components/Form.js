import React, { useState } from 'react'

export default function Form() {

    const [email, setEmail]= useState("");
    const [message, setMessage]= useState("");


    const handleOnChange= (e)=>{
        setEmail(e.target.value);
    }
    const emailValidation= ()=>{
      const regEx= /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

      if (regEx.test(email) ) {
          setMessage("Email is valid")
      }
   else if(!regEx.test(email) && email !== ""){
       setMessage("Email is Not Valid");
   }
   else{
       setMessage("")
   }
    }
    


    return (
    <> 
    <div>Form</div>

    <div>
        <h2>Email Validation</h2>
    </div>
    <div className='card'>
        <label htmlFor='email' className='lable'>Email: </label>
        <input id='email' type='email' placeholder='email' value={email} onChange={handleOnChange}></input>
        <button onClick={emailValidation}>Check</button>
        {message}
    </div>

    </>
  )
}
