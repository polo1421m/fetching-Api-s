import React, { useState, useEffect } from "react";

const SamplePage = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("me");
  });

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <span>{count}</span>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};

export default SamplePage;
