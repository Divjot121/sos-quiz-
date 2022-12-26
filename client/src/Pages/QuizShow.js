import React, {  useEffect, useState } from 'react'

import QuizCard from '../components/QuizCard'
import { getQuestionData } from '../helper/helper'

const QuizShow = ({setQuizId}) => {
  const [quizarry,setQuizarry]=useState([])
  
  useEffect(() => {
    const data = getQuestionData("http://localhost:5000/api/questions");
      async function run() {
        console.log(await data);
        setQuizarry(await data)
      }
  
      run();
  },[])
  
  return (
    <div className="quizes container">
      {quizarry.map((quizItem)=>{
        return (
          <QuizCard quizItem={quizItem} key={quizItem.id} setQuizId={setQuizId}/>
       ) })}       
        
    </div>
  )
}

export default QuizShow