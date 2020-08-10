import React, { useState } from "react";
import Input from "./Input";

function Welcome() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {

    const {value, name} = event.target;
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    setFullName((prevValue) => {
        if (name === "fName") {
          return {
            fName: value,
            lName: prevValue.lName
          }
        } else {
          return {
            fName: prevValue.fName,
            lName: value
          }
        }
    });

    // if (inputName === "fName") {
    //   setFullName({
    //     fName: newValue,
    //     lName: fullName.lName
    //   });
    // } else {
    //   setFullName({
    //     fName: fullName.fName,
    //     lName: newValue
    //   });
    // }
  }

  return (
    <form onSubmit={(event) => {event.preventDefault()}}>
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <input 
        name="fName"
        onChange={handleChange} 
        type="text" 
        placeholder="What's your first name?"
        value={fullName.fName}
      />
      <input
        name = "lName"
        onChange={handleChange} 
        type="text" 
        placeholder="What's your last name?"
        value={fullName.lName}
      />
      <button
        type="submit"
        style={{backgroundColor: isMouseOver ? "black" : "white"}}
        onMouseOver = {
          () => {
            setMouseOver(true);
          }
        }
        onMouseOut = {
          () => {
            setMouseOver(false);
          }
        }
      >Submit</button>
    </form>
  );
}

export default Welcome;