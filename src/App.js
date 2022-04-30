import React from "react";
import logo from "./logo.svg";
import HelloWorld from "./Components/HelloWorld";
import Hobbies from "./Components/Hobbies";

function App() {
  return (
    <>
      <h1>This is my first website</h1>
      <p>Hello thereeee! This is Gina and this are my hobbies: </p>
      <HelloWorld />
      <Hobbies hobbies={["Dance", "Play Violin", "Watch Netflix", "Spend time with friends and family"]} />
    </>
  );
}

export default App;
