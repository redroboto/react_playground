import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Challenges } from "./Challenges.jsx";
import { CreateUser } from "./Create.jsx";

function App() {
  const [count, setCount] = useState(0);

  // console.log(generateRandomId());

  return (
    <>
      <Challenges />
      <CreateUser />
    </>
  );
}

export default App;
