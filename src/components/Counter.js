// the U state: rerender and refresh the accept new value
// prop is passed out from some where into the component but state is generated with the component

import React from "react";

export const Counter = () => {
  const [value, setValue] = React.useState(0); // initial value(value) and function to set the value(setValue)

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const handleDecrease = () => {
    setValue((prevValue) => prevValue - 1);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
