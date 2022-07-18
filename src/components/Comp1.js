import React, { useEffect, useState } from 'react'



const Comp1 = () => {
 
    const [counter,setCounter]=useState(1);

//  useEffect(()=>{
//      console.log("abc");
//  })
 useEffect(()=>{
    console.log("mnop");
    const collection = document.getElementsByClassName("color");
    collection[0].style.color="red";
    console.log(collection[0]);
},[])
 const handleClick=()=>{
     setCounter(counter+1);
     alert(counter);
     if(counter%2===0)
     {
        const collection = document.getElementsByClassName("color");
        collection[0].style.color="red";  
     }
     else 
     {
        const collection = document.getElementsByClassName("color");
        collection[0].style.color="green";  
     }
    console.log("xyz");
 }
 console.log("qwer");
 const collection = document.getElementsByClassName("color");
 console.log(collection[0]);
  return (
    <>
    <div className="color">Comp1</div>
    <h1>{counter}</h1>
    <button onClick={()=>{handleClick()}} >Add</button>
    </>
  )
}

export default Comp1