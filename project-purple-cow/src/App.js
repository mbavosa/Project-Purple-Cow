import React, { useState } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="app">
      <div>
        <div className="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}
