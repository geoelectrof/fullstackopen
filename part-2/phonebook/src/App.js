import axios from "axios"
import { useState, useEffect } from 'react'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

import servicePerson from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setnewSearch] = useState('')

  useEffect(()=> {
    // axios
    //   .get('http://localhost:3001/persons')
    //   .then(response => {
    //     setPersons(response.data)
    //   })
    servicePerson
      .getAll()
      .then(response => setPersons(response))  
  }, [])

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
      // axios
      //   .post('http://localhost:3001/persons', newPersonObject)
      //   .then(response => {
      //     console.log(response.data)
      //     setPersons(persons.concat(response.data))
      //     setNewName("")
      //     setNewNumber("")
      //   } )
      servicePerson
        .create(newPersonObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName("")
          setNewNumber("")
        })
    }
  }

  const handleNewSearch = (event) => {
    setnewSearch(event.target.value)
  }

  const handleDelete = (id) => {
    console.log(id)
    servicePerson
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id
        ))
      })
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
        handleDelete = {handleDelete}
      />
    </div>
  )
}

export default App