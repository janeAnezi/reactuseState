import React, { useState } from "react";

function App() {
  const [iniTime, curTime] = useState(17);
  function currentTime() {
    curTime(new Date().toLocaleTimeString());
  }
  setInterval(currentTime, 1000);
  return (
    <div className="container">
      <h1>{iniTime}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
