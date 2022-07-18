import React, { useEffect } from 'react'



const Com2 = () => {


 const func1=()=>{
        alert("saf")
 }
    useEffect(()=>{
        func1();
    })
  

    const handleAdd=(a)=>{
        alert(a);
    }
  return (
    <div>
        <button onClick={()=>handleAdd("a")}>Add</button>
    </div>
  )
}

export default Com2