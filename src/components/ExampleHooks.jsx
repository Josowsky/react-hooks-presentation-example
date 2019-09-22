import React, { useState, useEffect } from "react";

import { StyledRow, StyledButton } from "./Example.styles";

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
    <main>
      <StyledRow>
        <StyledButton onClick={handleButtonClick}>
          Click me ({count})
        </StyledButton>
      </StyledRow>
      <StyledRow>Width {width}</StyledRow>
    </main>
  );
};

export default ExampleHooks;
