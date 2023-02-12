import { useState } from 'react'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value = {newSearch}
        handleNewSearch = {handleNewSearch}
      />
      <h2>add a new</h2>
        <PersonForm
          handleSubmit = {handleSubmit}
          newName = {newName}
          setNewName = {setNewName}
          newNumber = {newNumber}
          setNewNumber = {setNewNumber}
        />
      <h2>Numbers</h2>
      <Persons
        newSearch = {newSearch}
        persons = {persons}
      />
    </div>
  )
}

export default App