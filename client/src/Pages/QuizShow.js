import React, {  useEffect, useState } from 'react'

import QuizCard from '../components/QuizCard'
import { getQuestionData } from '../helper/helper'

const QuizShow = ({setQuizId}) => {
  const [quizarry,setQuizarry]=useState([])
  
  useEffect(() => {
    const data = getQuestionData(`${process.env.REACT_APP_SERVER_HOST}/api/questions`);
      async function run() {
        
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