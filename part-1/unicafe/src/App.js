import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {

  const average = () => {
    return ((good+(bad*-1))/(good+bad+neutral))
  }

  const positive = () => {
    return (good/(good+neutral+bad)) * 100
  }

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>average {average()}</div>
      <div>positive {positive()} %</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }
  
  const addNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => addGood()}>good</button>
      <button onClick={() => addNeutral()}>neutral</button>
      <button onClick={() => addBad()}>bad</button>
      <h1>statistics</h1>
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
      />
    </div>
  )
}

export default App