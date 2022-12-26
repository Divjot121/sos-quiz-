import React, { useState } from "react";
import QuizForm from "./Pages/QuizForm";
import QuizShow from "./Pages/QuizShow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

import QuizUser from "./Pages/QuizUser";
import Login from "./Pages/Login";
import TableResult from "./Pages/TableResult";
import Scores from "./Pages/Scores";

const App = () => {
  const [quesId, setQuizId] = useState();
  const [details, setDetails] = useState([]);
  return (
  
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<QuizShow setQuizId={setQuizId} />} />
          <Route exact path="/form" element={<QuizForm />} />
          <Route
            exact
            path="/login"
            element={<Login quesId={quesId} setDetails={setDetails} details={details} />}
          />
          <Route exact path="/quiz/:id" element={<QuizUser details={details} />} />
          <Route exact path="/score" element={<Scores/>}/>
          <Route exact path="/score/:id" element={<TableResult/>}/>
        </Routes>
      </Router>
  
  );
};

export default App;
