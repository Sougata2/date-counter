import { useState } from "react";
import "./App.css";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date();
  today.setDate(today.getDate() + count);

  function handleNextStep() {
    setStep((s) => s + 1);
  }
  function handlePreviousStep() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNextCount() {
    setCount((c) => c + step);
  }

  function handlePreviousCount() {
    setCount((c) => c - step);
  }

  return (
    <div className="counter">
      <div>
        <button className="counter-sign" onClick={handlePreviousStep}>
          &minus;
        </button>
        <span className="counter-display">Steps : {step}</span>
        <button className="counter-sign" onClick={handleNextStep}>
          &#43;
        </button>
      </div>
      <div>
        <button className="counter-sign" onClick={handlePreviousCount}>
          &minus;
        </button>
        <span className="counter-display">Count : {count}</span>
        <button className="counter-sign" onClick={handleNextCount}>
          &#43;
        </button>
      </div>
      <div>
        {count > 0 ? count : count * -1} day(s) {count >= 0 ? "from" : "ago"}{" "}
        today is {today.toDateString()}
      </div>
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
