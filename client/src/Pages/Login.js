import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "./Login.css";
const Login = ({ quesId, setDetails, details }) => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handledet = () => {
    console.log(quesId);
    if (Name === "" || Email === "") {
      alert("please enter Crediatials");
    } else if (Name !== "" && Email !== "") {
      navigate(`/quiz/${quesId}`);
    }
    setDetails([...details, { Name: Name, Email: Email }]);
  };
  return (
    <div className=" border Login ">
      <form className="m-5">
        <div className="form-group m-3">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            className="form-control  m-2 logininp"
            id="Name"
            placeholder="Enter Name"
            value={Name}
            onChange={handleName}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control m-2 logininp"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={Email}
            onChange={handleEmail}
          />
        </div>
        <Button
          onClick={handledet}
          className="text-light btn btn-info"
          style={{ marginLeft: "16vw" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
