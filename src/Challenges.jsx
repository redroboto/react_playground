import { useState } from "react";
import { Stopwatch } from "./Stopwatch.jsx";

export function Challenges() {
  return (
    <>
      <Challenge1 />
      <Stopwatch />
    </>
  );
}

function Challenge1() {
  const [toggleDisplay, setToggleDisplay] = useState("On");

  function handleClick() {
    if (toggleDisplay === "On") {
      setToggleDisplay("Off");
    } else {
      setToggleDisplay("On");
    }
  }

  return (
    <>
      <button onClick={handleClick}>Toggle</button>
      <Child toggleDisplay={toggleDisplay} />
    </>
  );
}

function Child({ toggleDisplay }) {
  return <h1>{toggleDisplay}</h1>;
}
