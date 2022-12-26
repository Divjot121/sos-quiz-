import React from "react";
import { Link } from "react-router-dom";

const QuizCard = (props) => {
  const handleId = () => {
    props.setQuizId(props.quizItem.id);
  };
  return (
    <div
      className="row m-3"
      style={{ border: "1px solid black ", borderRadius: "10px" }}
    >
      <div className="leftcard col">
        <h1 className="title">{props.quizItem.title}</h1>
        <p className="text">{props.quizItem.desc}</p>
      </div>
      <div className="rightcard col m-3 ">
        <div className="row">
          <h5 className="col">{props.quizItem.date}</h5>
          <h5 className="col">{props.quizItem.time}</h5>
         
          <Link
            to="/login"
            className="text-light btn btn-info col"
            onClick={handleId}
          >
            start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
