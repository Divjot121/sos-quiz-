import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResultData } from "../helper/helper";

const TableResult = () => {
  const { id } = useParams();

  const [ResultList, setResultList] = useState([]);
  useEffect(() => {
    async function run() {
      const data = await getResultData("http://localhost:5000/api/result");
      setResultList(data);
    }
    console.log(ResultList);
    run();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        {ResultList.map((resultlist,index) => {
          return (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{resultlist.name}</td>
              <td>{resultlist.email}</td>
              <td>{resultlist.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableResult;
