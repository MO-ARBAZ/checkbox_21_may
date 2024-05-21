import React, {useState} from 'react';
export default function App() {
    const [checkedOption , setcheckedOption] =  useState([]);

    const hanleCheckboxChange = (option) =>{
            if(checkedOption.includes(option)){
                setcheckedOption(checkedOption.filter((item) =>item!==option));
                
            }else{
                setcheckedOption([...checkedOption , option]);
            }
    }
    console.log("Hi")
  return (
      <div>
        <h1>Checkedlinst</h1>
      <form>

        <label>
        
          <input
          type ="checkbox"
          value = "Option 1"
          onChange ={() =>
          hanleCheckboxChange("Option 1")}
          checked={checkedOption.includes("Option 1")}
      />
            Option 1
         </label>
            
            <br/>

            <label>
          <input
          type ="checkbox"
          value = "Option 2"
          onChange ={() =>
          hanleCheckboxChange("Option 2")}
          checked={checkedOption.includes("Option 2")}
      />
          Option 2
          
        </label>
            <br/>
            <label>
          <input
          type ="checkbox"
          value = "Option 3"
          onChange ={() =>
          hanleCheckboxChange("Option 3")}
          checked={checkedOption.includes("Option 3")}
      />
          Option 3
     
        </label>
              
      </form>
      <h3>Selected Option </h3>
          <ul>

            {checkedOption.map((option, index) =>
            (
            <li key={index}>{option}</li>
            ))}
          </ul>
      </div>
  )
}
