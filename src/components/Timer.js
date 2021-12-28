import React, { useState, useEffect } from "react";
import { subtractSecond } from "../utils";

export const types = {
  normal: 1,
  quick: 0.5,
  slow: 2,
};

const Timer = ({ speed, initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setInterval(() => {
      setTime(subtractSecond(time));
    }, 1000 * speed);
  }, [speed]);

  return (
    <p style={{ fontSize: "4rem", fontWeight: "bold", fontFamily: "fantasy" }}>
      <span>{time.hours}</span>
      <span> : </span>
      <span>{time.minutes}</span>
      <span> : </span>
      <span>{time.seconds}</span>
    </p>
  );
};

export default Timer;
