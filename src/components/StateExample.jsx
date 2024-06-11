import { useState } from "react";

const Example = () => {
  //   const [count, setCount] = useState(0);

  //   console.log(setCount);

  //   return <p>Hello World </p>;
  // };

  //
  const [user, setUser] = useState({ name: "gaston" });

  const handleClick = (event) => {
    setUser({ name: "benoit" });
  };
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={handleClick}>dé-gaston-ifie ce gars</button>
    </div>
  );
};
export default Example;
