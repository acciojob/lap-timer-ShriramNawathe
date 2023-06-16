
//import React from "react";
//import './../styles/App.css';

//const App = () => {
 // return (
   // <div>
    //  {/* Do not remove the main div */}
//  </div>
// )
//}

//export default App


import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
    setLaps([]);
  };

  const lapTimer = () => {
    setLaps((prevLaps) => [...prevLaps, timer]);
  };

  return (
    <div>
      <div className="timer">
        <h1>{timer}</h1>
        <div className="buttons">
          {!isRunning ? (
            <button onClick={startTimer}>Start</button>
          ) : (
            <button onClick={stopTimer}>Stop</button>
          )}
          <button onClick={resetTimer}>Reset</button>
          <button onClick={lapTimer}>Lap</button>
        </div>
      </div>
      <div className="laps">
        <h2>Laps:</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {lap}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
