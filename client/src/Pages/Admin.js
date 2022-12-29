import React, { useState } from "react";
import "./Admin.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const Admin = ({ admin, setAdmin }) => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const handleAdminId = (e) => {
    setAdminId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleAuth = () => {
    if (adminId === "SOSTECH" && password === "sostechincc22") {
      setAdmin(!admin);
      alert("user authenticated");

      navigate("/");
    } else {
      alert("wrong crediatials");
    }
  };
  return (
    <div className=" border Login ">
      <form className="m-5">
        <div className="form-group m-3">
          <label htmlFor="Name">AdminId</label>
          <input
            type="text"
            className="form-control  m-2 logininp"
            id="Name"
            placeholder="Enter Name"
            value={adminId}
            onChange={handleAdminId}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleInputEmail1">Password</label>
          <input
            type="email"
            className="form-control m-2 logininp"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <Button
          onClick={handleAuth}
          className="text-light btn btn-info"
          style={{ marginLeft: "16vw" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Admin;
