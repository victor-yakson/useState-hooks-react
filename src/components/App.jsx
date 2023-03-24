import React, { useState } from "react";

function App() {
  setInterval(now, 1000);
  let time = new Date().toLocaleTimeString();
  const [getTime, setTime] = useState(time);

  function now() {
    let updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime);
  }
  return (
    <div className="container">
      <h1>{getTime}</h1>
      <button onClick={now}>Get Time</button>
    </div>
  );
}

export default App;
