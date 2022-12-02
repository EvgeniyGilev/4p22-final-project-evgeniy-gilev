import Button from '../Common/Button/Button';
import './Counter.css';
import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter == 0) return setCounter(counter);
    return setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <Button className="counter-button" onClick={decrement}>
        -
      </Button>
      <div className="counter-value">{counter}</div>
      <Button
        className="counter-button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;
