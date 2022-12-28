import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResultData } from "../helper/helper";

const TableResult = () => {
  const { id } = useParams();

  const [ResultList, setResultList] = useState([]);
  useEffect(() => {
    async function run() {
      const data = await getResultData(`${process.env.REACT_APP_SERVER_HOST}/api/result`);
      setResultList(data);
    }
 
    run();
  }, []);

  return (
    <table className="table m-3">
      <thead>
        <tr>
        <th scope="col">time</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Score</th>
          
        </tr>
      </thead>
      <tbody>
        {ResultList.map((resultlist,index) => {
          if(resultlist.quesid===id){
          return (
            <tr key={index}>
              <th scope="row">{resultlist.avvgtime}s</th>
              <td>{resultlist.name}</td>
              <td>{resultlist.email}</td>
              <td>{resultlist.score}</td>
            </tr>
          );
          }
        })}
      </tbody>
    </table>
  );
};

export default TableResult;
