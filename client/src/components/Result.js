import React from "react";

const Result = ({ count, details }) => {
  return (
    <div className="container">
      <h1>
      Name:{" "}
      <button className="btn btn-info text-light">{details[0].Name}</button>
      </h1>
      <h1>
      Email: <button className="btn btn-info text-light"> {details[0].Email}</button>
      </h1>
      <h2>Your Score is {count}</h2>
    </div>
  );
};

export default Result;
