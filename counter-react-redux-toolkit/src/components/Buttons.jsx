import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "../store";

const Buttons = () => {
  const refValue = useRef("");
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment())
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  };

  const handleReset = () => {
    dispatch(counterActions.reset());
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.toggle())
  };

  const handleOperation = () => {
    let number = Number.parseInt(refValue.current.value);
    dispatch(counterActions.add({number}));
    refValue.current.value = "";
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <button className="me-5 btn btn-primary" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-primary me-5" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-primary me-5" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn btn-primary" onClick={handlePrivacy}>
          Privacy
        </button>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <input
          type="number"
          placeholder="Enter number to add, with current counter"
          className="w-50"
          ref={refValue}
        />
        <button className="btn btn-dark ms-5" onClick={handleOperation}>
          Enter
        </button>
      </div>
    </>
  );
};

export default Buttons;
