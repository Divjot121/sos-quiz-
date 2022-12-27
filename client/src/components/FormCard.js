import React from "react";

const FormCard = ({
  AddQues,
  quest,
  a,
  b,
  c,
  d,
  cans,
  handleQues,
  handlea,
  handleb,
  handlec,
  handled,
  handlecans,
}) => {
  return (
    <div className="container">
      <div className=" g-1 form-group ">
        <input
          type="text"
          placeholder="enter the question.."
          value={quest}
          onChange={handleQues}
          className="form-control w-100"
        />
      </div>

      <div className="row g-1 align-items-center m-1">
        <div className="col-auto ">
          <label htmlFor="opta" className="col-form-label ">
            A.
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            name="opta"
            value={a}
            onChange={handlea}
            className="form-control"
          />
        </div>
      </div>

      <div className="row g-1 align-items-center m-1">
        <div className="col-auto">
          <label htmlFor="optb" className="col-form-label ">
            B.
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            name="optb"
            value={b}
            onChange={handleb}
            className="form-control"
          />
        </div>
      </div>
      <div className="row g-1 align-items-center m-1">
        <div className="col-auto">
          <label htmlFor="optc" className="col-form-label ">
            C.
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            name="optc"
            value={c}
            onChange={handlec}
            className="form-control"
          />
        </div>
      </div>
      <div className="row g-1 align-items-center m-1">
        <div className="col-auto">
          <label htmlFor="optd" className="col-form-label ">
            D.
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            name="optd"
            value={d}
            onChange={handled}
            className="form-control"
          />
        </div>
      </div>
      <div className="row g-1 align-items-center m-1">
        <div className="col-auto">
          <label htmlFor="correct" className="col-form-label ">
            CorrectAnswer
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            name="correct"
            value={cans}
            onChange={handlecans}
            className="form-control"
          />
        </div>
      </div>

      <input
        type="button"
        className="btn btn-primary"
        value="Add Question"
        onClick={AddQues}
      />
    </div>
  );
};

export default FormCard;
