import React, {Component, useState, useEffect} from 'react'
import axios from "axios"
import Question from "../Question/Question"
import {Redirect} from "react-router-dom"
import Message from "../Message/Message"
import '../MainPage/MainPage.scss'

function MainPage(){

    const [question, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [gameEnded, setGameEnded] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
   

    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=10")
        .then(res => res.data)
        .then(data => {
          setQuestions(data.results)
        
          })
        }, [])
        console.log(question)

        const handleAnswer = (answer) => {
            const newIndex = currentIndex +1;
            
            setCurrentIndex(newIndex);
            
            if(answer===question[currentIndex].correct_answer){
                setScore(score + 1)
                setShowMessage(false)
            }
            else {
                setShowMessage(true)
                console.log("else")
            }
          if(newIndex >= question.length){
              setGameEnded(true)
          }
        }
        if (gameEnded===true){
            <Redirect from="/trivia" to="/result"/>
        }
       
    return gameEnded ? (
        <h1 className="score__card">Your score is {score}!!! </h1>
        
        ):(
            question.length > 0 ? (
        
        <div className="container">
           
            {showMessage === true ? (<Message msg="Incorrect Answer"  setShowMessage={setShowMessage}/>): null}
        
           <Question 
           data ={question[currentIndex]} handleAnswer={handleAnswer}/>
           
       
        </div>
    ) : 
        <h1>Loading</h1>
    
        )
}
export default MainPage
