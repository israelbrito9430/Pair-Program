import React, {Component, useState, useEffect} from 'react'
import axios from "axios"
import Question from "../Question/Question"
import ScorePage from "../ScorePage/ScorePage"
import {Redirect, Link} from "react-router-dom"


function MainPage(){

    const [question, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [gameEnded, setGameEnded] = useState(false);
    // const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(()=>{
        axios.get("https://opentdb.com/api.php?amount=10")
        .then(res => res.data)
        .then(data => {
          setQuestions(data.results)
        //   setCurrentQuestion(0)
          })
        }, [])
        console.log(question)

        const handleAnswer = (answer) => {
            const newIndex = currentIndex +1;
            // setQuestions(nextQuestion)
            setCurrentIndex(newIndex);
            // setCurrentQuestion(nextQuestion)
            // question++;
            // setQuestions(question +1)
            if(answer===question[currentIndex].correct_answer){
                setScore(score + 1);
            }
          if(newIndex >= question.length){
              setGameEnded(true)
          }
        }
        if (gameEnded===true){
            <Redirect from="/trivia" to="/result"/>
        }
       
    return gameEnded ? (
        <h1 className="score__card">Your score is {score} </h1>
        // <Link to="/result">
        // <h2>See your score</h2>
        // {/* <ScorePage score={score}/> */}
        // </Link>
        ):(
            question.length > 0 ? (
        
        <div className="container">
            {/* <h1 className="title">MAYHORT TRIVIA</h1>
            <div>{question[0].questionText}</div>
            <button>{question[0].correctAnswer}</button>
            <button>{question[0].answerOptions[0]}</button>
            <button>{question[0].answerOptions[1]}</button>
            <button>{question[0].answerOptions[2]}</button> */}
          
           <Question 
           data ={question[currentIndex]} handleAnswer={handleAnswer}/>
           
       
        </div>
    ) : 
        <h1>Loading</h1>
    
        )
}

// class MainPage extends Component{
//     state = {
//         trivia: null,
//     }

    
//     getQuestion = ()=>{
//         return axios.get(`/api/trivia`)
//         .then(res => {
//           console.log(res)
//     })}
        
//     componentDidMount(){
//         this.getQuestion()
//     }

    
//     render(){
//         console.log(this.state)
//         return (
           
       
//                 <div className="container">
//                     <h1 className="title">MAYHORT TRIVIA</h1>
//                     <div>{this.state.questionText}</div>
//                     <button>{this.state.correctAnswer}</button>
//                     <button>{this.state.answerOptions[0]}</button>
//                     <button>{this.state.answerOptions[1]}</button>
//                     <button>{this.state.answerOptions[2]}</button>
                   
//                 </div>
//             // ) : 
//             //     <h1>Loading</h1>
        
//         )}
// }

// class MainPage extends Component {
//     state = {
//         trivia: null,
//     }
//     const [questions, setQuestions]= useState([]);

//     componentDidMount(){
//         axios.get(`/api/trivia`)
//         .then(res => res.data)
//         .then(data => 
//           this.setState({
//             trivia: data[0],
//           })
//         )}

//     // const questions = [];

// 	// const [currentQuestion, setCurrentQuestion] = useState(0);
// 	// const [showScore, setShowScore] = useState(false);
// 	// const [score, setScore] = useState(0);

// 	// const handleAnswerOptionClick = (isCorrect) => {
// 	// 	if (isCorrect) {
// 	// 		setScore(score + 1);
// 	// 	}

// 	// 	const nextQuestion = currentQuestion + 1;
// 	// 	if (nextQuestion < questions.length) {
// 	// 		setCurrentQuestion(nextQuestion);
// 	// 	} else {
// 	// 		setShowScore(true);
// 	// 	}
// 	// };
	
//     render(){
//         console.log(this.state)
// //         <div className='app'>
// //         {showScore ? (
// //             <div className='score-section'>
// //                 You scored {score} out of {questions.length}
// //             </div>
// //         ) : (
// //             <>
// //                 <div className='question-section'>
// //                     <div className='question-count'>
// //                         <span>Question {currentQuestion + 1}</span>/{questions.length}
// //                     </div>
// //                     <div className='question-text'>{questions[currentQuestion].questionText}</div>
// //                 </div>
// //                 <div className='answer-section'>
// //                     {questions[currentQuestion].answerOptions.map((answerOption) => (
// //                         <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// //                     ))}
// //                 </div>
// //             </>
// //         )}
// //     </div>
// // );
//     return (
//         <div className="container">
//             <h1 className="title">MAYHORT TRIVIA</h1>
//             <div>Question</div>
//             <div>Answer</div>
//             <div>Answer</div>
//             <div>Answer</div>
//             <div>Answer</div>
           
//         </div>
//     )}
// }

export default MainPage
