import React from "react";

const LoadingSpinner = () => {
  return (
    <center className="mt-3">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoadingSpinner;
