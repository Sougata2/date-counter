import { useState } from "react";
import "./App.css";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date();
  today.setDate(today.getDate() + count);

  function handleNextCount() {
    setCount((c) => c + step);
  }

  function handlePreviousCount() {
    setCount((c) => c - step);
  }

  function handleReset() {
    setCount((c) => 0);
    setStep((s) => 1);
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> step : {step}</span>
      </div>
      <div>
        <button className="counter-sign" onClick={handlePreviousCount}>
          &minus;
        </button>
        <input
          value={count}
          className="count-input"
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="counter-sign" onClick={handleNextCount}>
          &#43;
        </button>
      </div>
      <div>
        {count > 0 ? count : count * -1} day(s) {count >= 0 ? "from" : "ago"}{" "}
        today is {today.toDateString()}
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
