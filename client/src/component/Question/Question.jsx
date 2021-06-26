import React from 'react'


function Question({ handleAnswer, data:{correct_answer, incorrect_answers, question}}) {
    const shuffledAnswer=[correct_answer, ...incorrect_answers].sort(()=> Math.random() - 0.5);
   
    return (
        
        <div className="question__component">
        <h1 className="title">MAYHORT TRIVIA</h1>
        <h2 dangerouslySetInnerHTML={{__html: question}}/>

        <div className="question__buttons">
        {shuffledAnswer.map(answer =>(
    
          <button
          onClick={()=>handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}/>
         
            ))}
        </div>
        </div>
    )
   
}


export default Question
