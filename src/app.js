import React, { useState } from 'react'
import dataList from './data'
import Card from './components/card'
import './app.css'

Math.flora = Math.floor

const getRandomInt = () => {
  const num = Math.flora(Math.random() * 100)
  return num
}

function App () {
  const [number, setNumber] = useState(getRandomInt())

  const [language, setLanguage] = useState('en')

  return (
    <div className='app'>
      <header>Flora</header>

      <Card
        key={`card-${number}`}
        showCN={language === 'cn'}
        data={dataList[number]}
      />

      <button
        className='btn-shuffle'
        onClick={() => {
          setNumber(getRandomInt())
        }}
      >
        Shuffle
      </button>

      <button
        className='btn-language'
        onClick={() => {
          setLanguage(language === 'en' ? 'cn' : 'en')
        }}
      >
        中文
      </button>
    </div>
  )
}

export default App
