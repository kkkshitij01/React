import { useEffect, useState } from "react";
import "./style.css";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState();
  function generateRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomNumber(hex.length)];
    }
    setColor(hexColor);
  }
  //RGB COLOR FUNCTION
  function handleCreateRandomRgbColor() {
    let red = generateRandomNumber(256);
    let green = generateRandomNumber(256);
    let blue = generateRandomNumber(256);
    setColor(`rgb(${red}, ${green}, ${blue})`);
  }
  useEffect(() => {
    typeOfColor === "rgb"
      ? handleCreateRandomRgbColor()
      : handleCreateRandomHexColor();
  }, [typeOfColor]);
  return (
    <div
      className="random-color-container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
      <button
        onClick={() =>
          typeOfColor == "hex"
            ? handleCreateRandomHexColor()
            : handleCreateRandomRgbColor()
        }
      >
        Generate Random Color
      </button>
      <div className="displayInfo">
        <span>{typeOfColor.toUpperCase()} Color</span>
        {color}
      </div>
    </div>
  );
}
