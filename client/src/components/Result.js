import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const timearr = location.state.avgTime;
  const avg = timearr.reduce(function (accumVariable, curValue) {
    return accumVariable + curValue;
  }, 0);
  const handlesubmit = () => {
    const time = avg / location.state.QuizQues.length;

    const avvgtime = 60 - time;
    
    fetch(`${process.env.REACT_APP_SERVER_HOST}/api/result`, {
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
      
    alert("response submitted");
    navigate("/");
  };
  return (
    <div className="container  border">
      <>
        <h1>
          Name:{" "}
          <button className="btn btn-info text-light ">
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
        <button onClick={handlesubmit} className="btn btn-success">
          confirm{" "}
        </button>
      </>
    </div>
  );
};

export default Result;
