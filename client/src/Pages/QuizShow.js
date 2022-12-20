import React, { useContext } from 'react'
import { QuizContext } from '../config/ContextApi'
import QuizCard from '../components/QuizCard'

const QuizShow = ({setQuizId}) => {
  const {quiz} = useContext(QuizContext)
 
  const quizarry=Object.values(quiz)

  
  return (
    <div className="quizes container">
      {quizarry.map((quizItem)=>{
        return (
          <QuizCard quizItem={quizItem} key={quizItem.id} setQuizId={setQuizId}/>
        )
      })}
       
        
    </div>
  )
}

export default QuizShow