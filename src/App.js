import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [randomColor, setRandomColor] = useState("#FFFFFF");

  const generateRandomColor = () => {
    const randomColorCode =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(randomColorCode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = randomColor;
  }, [randomColor]);

  return (
    <div className="container">
      <h1>Random Color Generator</h1>
      <div className="color-box" style={{ backgroundColor: randomColor }}>
        <button onClick={generateRandomColor}>
          Click and Change The Color!
        </button>
        <p>
          {" "}
          <b>You can use this {randomColor} color in your projects.</b>
        </p>
      </div>
    </div>
  );
}

export default App;
