import React, {useState, useEffect} from "react";

const ExampleHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
    <div>
      <button onClick={() => setCount(count + 1)}>Click me ({count})</button>
    </div>
  </div>
  )
}

export default ExampleHooks;
