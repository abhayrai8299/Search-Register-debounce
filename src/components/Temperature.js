import React, { useState,useEffect } from 'react'

// const Temperature = () => {
     
    
// const [Celsuis,setCel] = useState(null)
//   const [Feh,setFeh] =useState(null)

//   return(
//     <div id="container">
//         <h1>Celsius</h1>
//         <input
//             type = "number"
//             value = { Celsuis }
//             onChange = {(event) => setFeh((event.target.value * 9 / 5) + 32).toFixed(2) } >
//           </input>
//           <h1>Fahrenheit</h1>
//           <input
//             type = "number" 
//             value = { Feh } 
//             onChange = {(event) => setCel((event.target.value - 32) * 5 / 9).toFixed(2) } >
//           </input>
//     </div>

//   )
// }

const Temperature=()=> {
  const [count, setCount] = useState(0);

  useEffect(() => {
     document.title = `You clicked ${count} times`;
     console.log(document.title)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Temperature