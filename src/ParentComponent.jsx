import React, { useState } from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>Received message: {props.message}</p>
    </div>
  );
};

const ParentComponent = () => {
  const [message, setMessage] = useState('Hello from Parent');

  const updateMessage = () => {
    setMessage('Updated message from Parent');
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Current message: {message}</p>

      <ChildComponent message={message} />

      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default ParentComponent;
