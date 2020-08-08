import React from "react";
import Login from "./Login";

let isLoggedIn = false;

const currentTime = new Date(2020, 1, 1, 21).getHours();

function App() {
  return (
    <div className="container">{
      //isLoggedIn ? <h1>Hello</h1> : <Login />
      
      currentTime > 12 && <h1> Why are you still working? </h1>
    }</div>
  );
}

export default App;
