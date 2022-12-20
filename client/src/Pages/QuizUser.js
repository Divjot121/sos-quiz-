import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserQues from "../components/UserQues";

const QuizUser = ({details}) => {
  const { id } = useParams();
  const [QuesList, setQuesList] = useState();
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("Quizes"));
    if (list) {
      let Currentques = list.filter((que) => {
        return que.id === id;
      });
      if (Currentques) {
        setQuesList(Currentques);
      }
    }
  }, [id]);
  
  return (
    <div className="item">
      {QuesList &&
        QuesList.map((itemList) => {
          const { title, desc, QuizQues } = itemList;
          return (
            <UserQues
              title={title}
              desc={desc}
              QuizQues={QuizQues}
              key={itemList.id}
              count={count}
              setCount={setCount}
              details={details}
            />
          );
        })}
    </div>
  );
};

export default QuizUser;
