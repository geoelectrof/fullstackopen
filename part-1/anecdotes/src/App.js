import { useState } from 'react'

const Anecdote = (props) => {
  return (
    <>
      <div>
        {props.text}
      </div>
      <div>
        has {props.votes} votes
      </div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const generateRandomAnecdote = () => {
    const randomValue = Math.floor(Math.random() * 7)
    setSelected(randomValue)
  }

  const addVote = (selectedAnecdote) => {
    const copy = [...votes]
    copy[selectedAnecdote] += 1
    setVotes(copy)
    setMostVotes(copy.indexOf(Math.max(...copy))) 
  }


  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote 
        text = {anecdotes[selected]}
        votes = {votes[selected]}
      />
      <button onClick={()=>addVote(selected)}>vote</button>
      <button onClick={() => generateRandomAnecdote()}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote
        text = {anecdotes[mostVotes]}
        votes = {votes[mostVotes]}
      />
    </>
  )
}

export default App