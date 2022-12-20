import React, { createContext, useEffect, useReducer } from "react";
import QuizReducer from "./Reducer";

export const QuizContext = createContext();

const QuizContextprovider = (props) => {
  
  const [quiz, dispatch] = useReducer(QuizReducer, [], () => {
    const localData = localStorage.getItem("Quizes");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
   
    localStorage.setItem("Quizes", JSON.stringify(quiz));
  }, [quiz]);
  return (
    <QuizContext.Provider value={{ quiz, dispatch }}>
      {props.children}
    </QuizContext.Provider>
  );
};
export default QuizContextprovider;
