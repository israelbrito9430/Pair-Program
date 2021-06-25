import React from 'react'

function Question({ handleAnswer, data:{correct_answer, incorrect_answers, question, nextQuestion}}) {
    const shuffledAnswer=[correct_answer, ...incorrect_answers].sort(()=> Math.random() - 0.5);

    // const Button = ({ answer, className}) =>(
      
    // )
   
    return (
        
        <div className="question__component">
        <h1 className="title">MAYHORT TRIVIA</h1>
        <h2 dangerouslySetInnerHTML={{__html: question}}/>

        {/* <div className='answer-section'>
	{questions[currentQuestion].answerOptions.map((answerOption, index) => (
		<button>{answerOption.answerText}</button>
	))}
    </div> */}
        {shuffledAnswer.map(answer =>(
            // <Button className={ : ""} onClick={()=>handleAnswer(answer)} answer={answer}/> 
    
          <button className= {`${correct_answer===answer ? "bg-purple-300": "bg-white"}bg-white`}
          onClick={()=>handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}/>
         
            ))}
        </div>
    )
   
}

// function shuffle(arr){
//     for(let i=0; i<20; i++){
//         const id1 = Math.floor(Math.random() * arr.length);
//         const id2 = Math.floor(Math.random() * arr.length);


//     }
// }

export default Question
