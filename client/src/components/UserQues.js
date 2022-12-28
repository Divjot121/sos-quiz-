import React, { useEffect, useState } from "react";

import "./UserQues.css";
import { useNavigate } from "react-router-dom";
const UserQues = ({
  count,
  setCount,
  title,
  desc,
  QuizQues,
  details,
  quesid,
}) => {
  const navigate = useNavigate();
  const [quesNo, setQuesNo] = useState(0);
  const [cont, setCont] = useState(true);
  const [sel, setSel] = useState();
  const [timer, setTimer] = useState(60);
  const [avgTime, setAvgTime] = useState([]);

  const handlechange = (e) => {
    setSel(e.target.value);
  };

  const handleNext = (e) => {
    setAvgTime([...avgTime, timer]);
    setTimer(60);
    if (sel && QuizQues[quesNo].cans) {
      if (sel === QuizQues[quesNo].cans) {
        setCount((count) => count + 10);
      }
    }

    if (quesNo < QuizQues.length - 1) {
      setQuesNo((quesNo) => quesNo + 1);
    } else {
      setCont((cont) => !cont);
    }
  };
  useEffect(() => {
    if (!cont) {
      navigate("/result", {
        state: {
          QuizQues: QuizQues,
          quesid: quesid,
          count: count,
          details: details,
          avgTime: avgTime,
        },
      });
    }
  }, [cont]);

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
      </div>
    </div>
  );
};

export default UserQues;
