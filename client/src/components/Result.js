import React from "react";
import { useLocation } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const timearr = location.state.avgTime;
  const avg = timearr.reduce(function (accumVariable, curValue) {
    return accumVariable + curValue;
  }, 0);
  const handlesubmit = () => {
    const time = avg / location.state.QuizQues.length;
    const avvgtime = 60 - time;
    console.log(avvgtime);
    console.log(location.state.QuizQues.length);
    console.log(location.state.avgTime);
    fetch("http://localhost:5000/api/result", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        quesid: location.state.quesid,
        avvgtime,
        name: location.state.details[0].Name,
        email: location.state.details[0].Email,
        score: location.state.count,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  };
  return (
    <div className="container">
      <h1>
        Name:{" "}
        <button className="btn btn-info text-light">
          {location.state.details[0].Name}
        </button>
      </h1>
      <h1>
        Email:{" "}
        <button className="btn btn-info text-light">
          {" "}
          {location.state.details[0].Email}
        </button>
      </h1>
      <h2>Your Score is {location.state.count}</h2>
      <button onClick={handlesubmit}>confirm </button>
    </div>
  );
};

export default Result;
