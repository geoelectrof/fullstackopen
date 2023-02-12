import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setnewSearch] = useState('')

  const handleSubmit = (event) => {
    const personsArr = persons.map(person => person.name)
    if (personsArr.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      event.preventDefault()
      const newPersonObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPersonObject))
      setNewName("")
      setNewNumber("")
    }
  }

  const handleNewSearch = (event) => {
    setnewSearch(event.target.value)
  }

  const displayPersons = () => {
    const regex = new RegExp(newSearch, 'gi')
    const newArr = persons.filter( person => {
      return person.name.match(regex)
    })
    return newArr
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with
        <input 
          value = {newSearch}
          onChange={(event) => handleNewSearch(event)}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>name: 
          <input 
            value = {newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>number:
          <input 
            value = {newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* {persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)} */}
      {displayPersons().map(person => <div key={person.name}>{person.name} {person.number}</div>)}
      <br />
    </div>
  )
}

export default App