import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <div className="p-5">
      <h3 className="text-center">Count Value: {counter}</h3>
    </div>
  );
};

export default CounterValue;
