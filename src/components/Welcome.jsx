import React, { useState } from "react";
import Input from "./Input";

function Welcome() {

  const [name, setName] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={(event) => {event.preventDefault()}}>
      <h1>Hello {name}</h1>
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder="What's your name?"
        value={name}
      />
      <button
        type="submit"
        style={{backgroundColor: isMouseOver ? "black" : "white"}}
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
      >Submit</button>
    </form>
  );
}

export default Welcome;