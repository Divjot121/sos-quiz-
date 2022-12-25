import React, {  useState } from "react";
import FormCard from "../components/FormCard";

import { v4 as uuidv4 } from "uuid";
import QuesItem from "../components/QuesItem";
import "./QuizForm.css";



const QuizForm = () => {

  const [QuizQues, setQuizQues] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [quest, setQuest] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [cans, setCans] = useState("");
  const handleQues = (e) => {
    setQuest(e.target.value);
  };
  const handletitle = (e) => {
    setTitle(e.target.value);
  };
  const handledesc = (e) => {
    setDesc(e.target.value);
  };
  const handlecans = (e) => {
    setCans(e.target.value);
  };
  const handlea = (e) => {
    setA(e.target.value);
  };
  const handleb = (e) => {
    setB(e.target.value);
  };
  const handlec = (e) => {
    setC(e.target.value);
  };
  const handled = (e) => {
    setD(e.target.value);
  };
  const AddQues = () => {
    setQuizQues([
      ...QuizQues,
      {
        id: uuidv4(),
        quest,
        cans,
        a,
        b,
        c,
        d,
      },
    ]);
    setQuest("");
    setA("");
    setB("");
    setC("");
    setD("");
    setCans("");
  };
 
 
  const handlesubmit = (event) => {
    event.preventDefault();
    const today=new Date();
    const month=today.getMonth()+1;
    const date=today.getDate()+":"+month+":"+today.getFullYear();
    const time=today.getHours()+":"+today.getMinutes()
    event.preventDefault();
    
    fetch("http://localhost:5000/api/questions", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id:uuidv4(),
        time:time,
        date:date,
        title,
        desc,
        QuizQues,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        
      });
  };

  return (
    <div className="cont">
      <div className="w-100 border">
        <form className="border">
          <div className="row g-3 align-items-center m-1">
            <div className="col-auto">
              <label htmlFor="title" className="col-form-label ">
                Quiz Title
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="title"
                value={title}
                onChange={handletitle}
                className="form-control"
              />
            </div>
          </div>
          <div className="row g-3 align-items-center m-1">
            <div className="col-auto">
              <label htmlFor="info" className="col-form-label">
                Description
              </label>
            </div>
            <div className="col-auto">
              <textarea
                name="info"
                id="desc"
                cols="60"
                rows="3"
                value={desc}
                onChange={handledesc}
                className="form-control"
              ></textarea>
            </div>
          </div>
          <FormCard
            AddQues={AddQues}
            quest={quest}
            a={a}
            b={b}
            c={c}
            d={d}
            cans={cans}
            handleQues={handleQues}
            handlea={handlea}
            handleb={handleb}
            handlec={handlec}
            handled={handled}
            handlecans={handlecans}
          />

          <button
            className="btn btn-success ml-3 submit "
            onClick={handlesubmit}
          >
            submit
          </button>
        </form>
      </div>
      <div className="w-100 border ">
        {QuizQues &&
          QuizQues.map((question, index) => {
            return <QuesItem question={question} key={index} />;
          })}
      </div>
    </div>
  );
};

export default QuizForm;
