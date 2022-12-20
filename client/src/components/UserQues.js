import React, { useEffect, useState } from "react";
import Result from "./Result";
import "./UserQues.css";
const UserQues = ({ count, setCount, title, desc, QuizQues,details }) => {
  const [quesNo, setQuesNo] = useState(0);
  const [cont, setCont] = useState(true);
  const [sel, setSel] = useState();
  const [timer, setTimer] = useState(60);

  const handlechange = (e) => {
    setSel(e.target.value);
  };

  const handleNext = (e) => {
    setTimer(60);
    if (sel && QuizQues[quesNo].cans) {
      if (sel === QuizQues[quesNo].cans) {
        setCount((count) => count + 1);
      }
    }
    console.log(count);
    if (quesNo < QuizQues.length - 1) {
      setQuesNo((quesNo) => quesNo + 1);
    } else {
      setCont((cont) => !cont);
    }
  };
  useEffect(() => {
    const time = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    if (timer === 0) {
      handleNext();
      setTimer(60);
    }
    return () => clearInterval(time);
  });

  return (
    <div className="body">
      <h2 className="mb-5">Topic:{title}</h2>
      <div className="quiz-cont" id="quiz">
        {cont ? (
          <div
            className="quiz-header"
            key={QuizQues[quesNo].id}
            onChange={handlechange}
          >
            <p>Remaining time:{timer}</p>
            <>
              <h4 id="question">
                Q{quesNo + 1}.{QuizQues[quesNo].quest}
              </h4>
              <ul>
                <li className="link">
                  <input
                    type="radio"
                    name="answer"
                    id="a"
                    value={QuizQues[quesNo].a}
                    className="answer"
                  />
                  <label htmlFor="a" id="a_text">
                    {QuizQues[quesNo].a}
                  </label>
                </li>
                <li className="link">
                  <input
                    type="radio"
                    name="answer"
                    id="b"
                    value={QuizQues[quesNo].b}
                    className="answer"
                  />
                  <label htmlFor="b" id="b_text">
                    {QuizQues[quesNo].b}
                  </label>
                </li>
                <li className="link">
                  <input
                    type="radio"
                    name="answer"
                    id="c"
                    value={QuizQues[quesNo].c}
                    className="answer"
                  />
                  <label htmlFor="c" id="c_text">
                    {QuizQues[quesNo].c}
                  </label>
                </li>
                <li className="link">
                  <input
                    type="radio"
                    name="answer"
                    id="d"
                    value={QuizQues[quesNo].d}
                    className="answer"
                  />
                  <label htmlFor="d" id="d_text">
                    {QuizQues[quesNo].d}
                  </label>
                </li>
              </ul>

              <button id="submit" onClick={handleNext}>
                Submit
              </button>
            </>
            
          </div>
        ) : (
          <Result count={count} details={details} />
        )}
      </div>
    </div>
  );
};

export default UserQues;
