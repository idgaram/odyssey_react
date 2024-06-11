import { useState } from "react";

const Example = ({ setMessage }) => {
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <input name="message" onChange={handleChange} />
    </div>
  );
};
export default Example;
