import React, { useState } from "react";
import SpeedSelector from "./components/SpeedSelector";
import Timer, { types } from "./components/Timer";

const initialTime = {
  hours: 1,
  minutes: 0,
  seconds: 2,
};

const App = () => {
  const [speed, setSpeed] = useState(types.normal);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Timer speed={speed} initialTime={initialTime} />
      <SpeedSelector setSpeed={setSpeed} types={types} />
    </div>
  );
};

export default App;
