import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  // step = current step
  // setStep = the new state (+1 for next / -1 for previous) setState should not be set manually , it should be dynamic ()
  // useState = is a hook, everything that starts with "use" is a hook can only be used at the top level of a funtion
  // use const when setting state (one advantage is that it will prevent us from creating certain bugs with let)
  const [step, setStep] = useState(1);
  // the default value of isopen is true, if false the content will be hidden
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // if we want to jump 2 steps when clicking on "next"
      // setStep((s) => s + 1);
    }
    // BAD PRACTICE:
    // test.name = "Fred";
    // Good practice is to create a setterfunction under function app()
    // and call the function app() here like this:

    //setTest({ name: "Fred" });
  }
  return (
    <div>
      {/* the button should return the opposite state off useState, so when the state is open, close and vice versa */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {/*Whenever isOpen is true the code just below will run*/}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step}</h3>
      {children}
    </div>
  );
}

// Creating a re-usable btn
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {/*   {children} Gives access to the child components of a parent */}
      {children}
    </button>
  );
}
