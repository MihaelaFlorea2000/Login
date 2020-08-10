import React, { useState } from "react";

function Welcome() {

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {

    const {value, name} = event.target;
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    setContact((prevValue) => {
        if (name === "fName") {
          return {
            fName: value,
            lName: prevValue.lName,
            email: prevValue.email
          }
        } else if (name === "lName"){
          return {
            fName: prevValue.fName,
            lName: value,
            email: prevValue.email
          }
        } else {
          return {
            fName: prevValue.fName,
            lName: prevValue.lName,
            email: value
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
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <input 
        name="fName"
        onChange={handleChange}
        placeholder="What's your first name?"
        value={contact.fName}
      />
      <input
        name = "lName"
        onChange={handleChange} 
        placeholder="What's your last name?"
        value={contact.lName}
      />
      <input
        name = "email"
        onChange={handleChange} 
        placeholder="What's your email?"
        value={contact.email}
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