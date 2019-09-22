import React, { useState, useEffect } from 'react';

const ExampleHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const handleButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <div>
        <button onClick={handleButtonClick}>Click me ({count})</button>
      </div>
    </div>
  );
};

export default ExampleHooks;
