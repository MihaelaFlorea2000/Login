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

    setContact((prevValue) => {
        return {
          ...prevValue, // to preserve prev values
          [name]: value 
        }
    });

    // The [name]:value without ES6
    // let name = "fName";
    // let obj = {};
    // obj[name] = value;
      //  => obj = {
      //     fName: value
      //    }
    // return {
    //   ...prevValue,
    //   ...obj
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