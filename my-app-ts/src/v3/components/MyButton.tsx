import { useEffect, useState } from "react";

export const MyButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect only once");
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};

export const MyStateless = () => {
  console.log("MyStateless render");

  return <h2>Hello!</h2>;
};
