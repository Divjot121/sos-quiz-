import React, { useEffect, useState } from "react";
import QuizForm from "./Pages/QuizForm";
import QuizShow from "./Pages/QuizShow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

import QuizUser from "./Pages/QuizUser";
import Login from "./Pages/Login";
import TableResult from "./Pages/TableResult";
import Scores from "./Pages/Scores";
import Result from "./components/Result";
import Admin from "./Pages/Admin";

const App = () => {
  const [quesId, setQuizId] = useState();
  const [details, setDetails] = useState([]);
  const [admin,setAdmin]=useState(false)
  useEffect(()=>{
console.log(admin)
  },[admin])
  return (
    <Router>
      <Navigation admin={admin}/>
      <Routes>
        <Route exact path="/" element={<QuizShow setQuizId={setQuizId} />} />
        <Route exact path="/form" element={<QuizForm admin={admin}/>} />
        <Route
          exact
          path="/login"
          element={
            <Login quesId={quesId} setDetails={setDetails} details={details} />
          }
        />
        <Route
          exact
          path="/quiz/:id"
          element={<QuizUser details={details} />}
        />
        <Route exact path="/result" element={<Result />} />
        <Route exact path="/score" element={<Scores admin={admin} />} />
        <Route exact path="/score/:id" element={<TableResult admin={admin} />} />
        <Route exact path="/admin" element={<Admin admin={admin} setAdmin={setAdmin}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
