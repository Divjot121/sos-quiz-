import React, { createContext, useEffect, useReducer } from "react";
import { getQuestionData, postQuestionData } from "../helper/helper";
import QuizReducer from "./Reducer";

export const QuizContext = createContext();

const QuizContextprovider = (props) => {
  const [quiz, dispatch] = useReducer(QuizReducer, [], () => {
    const data = getQuestionData("http://localhost:5000/api/questions");
    async function run() {
      console.log(await data);
    }

    run();
    const localData = localStorage.getItem("Quizes");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    const { id, Time, date, title, desc, QuizQues } = quiz;
    postQuestionData("http://localhost:5000/api/questions", {
      id,
      Time,
      date,
      title,
      desc,
      QuizQues,
    });

    localStorage.setItem("Quizes", JSON.stringify(quiz));
  }, [quiz]);
  return (
    <QuizContext.Provider value={{ quiz, dispatch }}>
      {props.children}
    </QuizContext.Provider>
  );
};
export default QuizContextprovider;
