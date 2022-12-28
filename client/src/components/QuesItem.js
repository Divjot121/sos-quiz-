import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
const QuesItem = ({QuizQues,setQuizQues}) => {
  const removeElement = (index) => {
    
    const newQues = QuizQues.filter((arr) => arr.id!== index);
    setQuizQues(newQues);
   
  };
  return (
    <table className="table m-3 w-100">
          
          {QuizQues &&
            QuizQues.map((question, index) => {
              return (
    <tbody key={index}>
      <tr>
        <th scope="row" className="w-50">{question.quest}</th>
        <td>
          {question.a && (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Answers
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>A.{question.a}</Dropdown.Item>

                <Dropdown.Item>B.{question.b}</Dropdown.Item>

                <Dropdown.Item> C.{question.c}</Dropdown.Item>
                <Dropdown.Item>D.{question.d} </Dropdown.Item>

                <Dropdown.Item> Correct.{question.cans}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </td>
        <td>
          <AiFillDelete className="m-3" onClick={()=>removeElement(question.id)}/>
        </td>
      </tr>
    </tbody>
     );
    })}
</table>
  );
};

export default QuesItem;
