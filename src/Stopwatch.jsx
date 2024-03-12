import { useState, useRef } from "react";

export function Stopwatch() {
  const [currentState, setCurrentState] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef();

  const onStart = () => {
    if (currentState === "Start") return;
    setCurrentState("Start");
    intervalRef.current = setInterval(() => {
      setCurrentTime((currentTime) => currentTime + 50);
    }, 50);
  };

  const onStop = () => {
    if (currentState === "Stop") return;
    setCurrentState("Stop");
    clearInterval(intervalRef.current);
  };

  const onReset = () => {
    if (currentState === "Reset") return;
    setCurrentState("Reset");
    setCurrentTime(0);
  };

  const sec = Math.floor(currentTime / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const millisec = (currentTime % 1000).toString().padStart(3, "0");
  const seconds = (sec % 60).toString().padStart(2, "0");
  const minutes = (min % 60).toString().padStart(2, "0");
  const hours = (hour % 24).toString().padStart(2, "0");

  return (
    <div>
      <h1>
        <span>{hours}</span>: <span>{minutes}</span>: <span>{seconds}</span>:{" "}
        <span>{millisec}</span>
      </h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
