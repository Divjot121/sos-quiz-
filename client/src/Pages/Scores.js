import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuestionData } from "../helper/helper";

const Scores = ({admin}) => {
 
  const [quizarry, setQuizarry] = useState([]);
 
  useEffect(() => {
    const data = getQuestionData("http://localhost:5000/api/questions");
    async function run() {
      console.log(await data);
      setQuizarry(await data);
    }

    run();
    
  }, []);
  return (
   <form>
      { admin && quizarry.map((quizItem,index) => {
        return (
          <div key={index}
            className="row m-3"
            style={{ border: "1px solid black ", borderRadius: "10px" }}
          >
            <div className="leftcard col">
              <h1 className="title">{quizItem.title}</h1>
              <p className="text">{quizItem.desc}</p>
            </div>
            <div className="rightcard col m-3 ">
              <div className="row">
                <h5 className="col">{quizItem.date}</h5>
                <h5 className="col">{quizItem.time}</h5>

                <Link
                  to={`/score/${quizItem.id}`}
                  className="text-light btn btn-info col"
                >
                  scores
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </form>
  );
};

export default Scores;
