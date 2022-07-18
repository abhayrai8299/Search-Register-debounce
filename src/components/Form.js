import React, { useState } from 'react'

const Form = () => {

    const [register,setRegister]=useState({
        username:"",
        email:"",
        city:"",
        address:"",
        password:""
    })
   const [store,setstore]=useState([]);

 const handlechange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(register);
     setRegister({...register,[name]:value})
 }

 const handleSubmit=(e)=>{
    e.preventDefault();
    const newrecord={...register, id:new Date().getTime().toString};
    console.log("sdad",store);
    setstore([...store,newrecord]);
 }
 console.log("ddd",store)
  return (
    <div>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
            UserName<input type="text" value={register.username} onChange={handlechange}  name='username' /><br />
            Email<input type="email" value={register.email}  onChange={handlechange}  name='email' /><br />
            City<input type="text" value={register.city} onChange={handlechange}  name='city'/><br />
            Address<input type="text" value={register.address} onChange={handlechange}  name='address'/><br />
            Password<input type="text"  value={register.password} onChange={handlechange}  name='password' />
        </form>
        <button type="submit">Submit</button>
    </div>
  )
}

export default Form