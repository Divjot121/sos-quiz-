import { v4 as uuidv4 } from "uuid";
const today=new Date();
const month=today.getMonth()+1;
const date=today.getDate()+":"+month+":"+today.getFullYear();
const time=today.getHours()+":"+today.getMinutes()

export const QuizReducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUIZ":
      
      return [
        ...state,

        {
          id: uuidv4(),
          Time:time,
          date:date,
          title: action.quiz.title,
          desc: action.quiz.desc,
          QuizQues: action.quiz.QuizQues,
        },
      ];

    default:
      throw new Error(`some error ${Error}`);
  }
};
export default QuizReducer;
