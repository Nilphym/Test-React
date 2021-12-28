import React from "react";

const SpeedSelector = ({ setSpeed, types }) => {
  return (
    <div>
      <label style={{ marginRight: "0.5em" }} htmlFor="type">
        Speed
      </label>
      <select
        onChange={(evt) => setSpeed(evt.target.value)}
        name="type"
        id="type"
      >
        {Object.entries(types).map(([key, value]) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SpeedSelector;
