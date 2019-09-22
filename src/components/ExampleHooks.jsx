import React, { useState, useEffect } from "react";

const ExampleHooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [width, setWith] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWith(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  });

  const handleButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <div>
        <button onClick={handleButtonClick}>Click me ({count})</button>
      </div>
      <div>
        <p>{width}</p>
      </div>
    </div>
  );
};

export default ExampleHooks;
