import { createStore } from "redux";
import react, { useState } from "react";
import React from "react";
// How will this work?

// on load, it will initialize state and send promises to the required components. It will request state, firebase functuion

export default function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter: any) => prevCounter + 1);
  };

  // View: the UI definition
  return (
    <>
      Value: {counter} <button onClick={increment}> Increment</button>
    </>
  );
}
