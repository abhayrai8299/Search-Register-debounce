
import { debounce } from "lodash";
import React, { useState,useCallback} from "react";

export default function App() {
  const [search, setSearch] = useState([]);
  const debounce=(func)=>{
    let timer;
    return function(...args){
       // const context=this;
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
        //    timer=null
            func(...args);
        //    func.apply(context,args);
        },2000);
    }
  }
  const handleChange = (event) => {
    const val = event.target.value;
    fetch(`https://demo.dataverse.org/api/search?q=${val}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items));
  };

 const optimisedver=useCallback(debounce(handleChange),[])

  return (
    <div className="App">
      <input
        type="text"
        name="search"
        placeholder="Enter some inputs"
        onChange={optimisedver}
      />
      {search.length > 0 && (
        <div>
          {search.map((el) => (
            <div>
              <span>{el.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
