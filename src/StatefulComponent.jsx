import React, { useState } from 'react';

const StatefulComponent = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default StatefulComponent;
