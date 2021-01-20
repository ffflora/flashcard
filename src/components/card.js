import React, { useState } from 'react'
import './card.css'

const repalcePattren = /\/.+/

const Card = ({ data, showCN }) => {
  const { question, answers } = data
  const [count, setCount] = useState(0)

  const getMoreAnswer = () => {
    if (count < answers.length) {
      setCount(count + 1)
    }
  }

  const getAllAnswers = () => {
    if (count < answers.length) {
      setCount(answers.length)
    }
  }

  return (
    <div className='card'>
      <div className='question'>{showCN ? question : question.replace(repalcePattren, '')}</div>
      <div className='answers'>
        {answers.slice(0, count).map((answer, index) => {
          return (
            <div key={`ans-${index}`} className='answer'>
              {showCN ? answer : answer.replace(repalcePattren, '')}
            </div>
          )
        })}
      </div>

      {count < answers.length ? (
        <div className='btn-container'>
          <button className='btn-more-answer' onClick={getMoreAnswer}>{answers.length === 1 ? 'Show' : 'More'} answer</button>
          {answers.length === 1 ? null : <button className='btn-all-answer' onClick={getAllAnswers}>All answers</button>}
        </div>
      ) : null}
    </div>
  )
}

export default Card
