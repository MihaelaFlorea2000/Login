import React from "react";
import Form from "./Form";
import Welcome from "./Welcome";

let userIsRegistered = true;

// function App() {
//   return (
//     <div className="container">{
//       <Form 
//         isRegistered={userIsRegistered}
//       />
//     }</div>
//   );
// }

function App() {
  return (
    <div className="container">
      <Welcome />
    </div>
  );
}

export default App;
