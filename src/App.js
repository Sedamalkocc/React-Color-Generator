import React, { useState } from "react";

function App() {
  const [randomColor, setRandomColor] = useState("#FFFFFF");

  const generateRandomColor = () => {
    const randomColorCode =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(randomColorCode);
  };

  return (
    <div>
      <h1>Rastgele Renk Üretici</h1>
      <div
        className="container"
        onClick={generateRandomColor}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: randomColor,
          cursor: "pointer",
        }}
      >
        <button>Tıkla ve rengi değiştir!</button>
      </div>
    </div>
  );
}

export default App;
