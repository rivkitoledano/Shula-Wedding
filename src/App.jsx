import React from "react";
import CountDown from "./countDown/CountDown";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CountDown />
      <div className="circle" id="circle1"></div>
      <div className="circle" id="circle2"></div>
      <div className="circle" id="circle3"></div>
      <div className="circle" id="circle4"></div>
      <div className="circle" id="circle5"></div>
      <div className="circle" id="circle6"></div>
      <div className="circle" id="circle7"></div>
      <div className="circle" id="circle8"></div>
    </div>
  );
}

export default App;
