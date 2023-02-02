import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick()}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  return (
    <div>{props.text} {props.value} {props.special}</div>
  )
}

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
      <StatisticsLine 
        text = "good"
        value = {good}
      />
      <StatisticsLine 
        text = "neutral"
        value = {neutral}
      />
      <StatisticsLine 
        text = "bad"
        value = {bad}
      />
      <StatisticsLine 
        text = "average"
        value = {average()}
      />
      <StatisticsLine 
        text = "positive"
        value = {positive()}
        special = "%"
      />
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
      <Button 
        text = "good"
        handleClick = {addGood}
      />
      <Button 
        text = "neutral"
        handleClick = {addNeutral}
      />
      <Button 
        text = "bad"
        handleClick = {addBad}
      />
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