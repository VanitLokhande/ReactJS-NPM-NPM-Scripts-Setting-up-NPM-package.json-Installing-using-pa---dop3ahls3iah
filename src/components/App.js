import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [change, setchange] = useState(false);

  const handlechange = () => {
    setchange(true);
  };
  return (
    <div id="main">
      <button id="click " onClick={handlechange}>
        click{" "}
      </button>
      {change && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
