import React, { useState } from "react";
import QuizForm from "./Pages/QuizForm";
import QuizShow from "./Pages/QuizShow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizContextprovider from "./config/ContextApi";
import QuizUser from "./Pages/QuizUser";
import Login from "./Pages/Login";
import TableResult from "./Pages/TableResult";

const App = () => {
  const [quesId, setQuizId] = useState();
  const [details, setDetails] = useState([]);
  return (
    <QuizContextprovider>
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
          <Route exact path="/score/:id" element={<TableResult/>}/>
        </Routes>
      </Router>
    </QuizContextprovider>
  );
};

export default App;
