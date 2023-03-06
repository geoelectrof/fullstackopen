// import axios from "axios"
import { useState, useEffect } from 'react'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Notification from "./Notification"

import './index.css'

import servicePerson from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setnewSearch] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

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
      // alert(`${newName} is already added to phonebook`)
      event.preventDefault()
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        // console.log("did not delete")
        updateNumber(newName)
        setSuccessMessage(
          `${newName}'s number updated to the server`
        )
        setMessageType("success")
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      }
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
        setSuccessMessage(
          `${newName}'s number added to the server`
        )
        setMessageType("success")
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
    }
  }

  const handleNewSearch = (event) => {
    setnewSearch(event.target.value)
  }

  const handleDelete = (id) => {
    const toDelete = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${toDelete.name}?`)) {
      servicePerson
        .deletePerson(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id
          ))
        })
        .catch(error => {
          console.log('already deleted')
          setSuccessMessage(
            `Information of ${toDelete.name} has already been removed from server`
          )
          setMessageType("error")
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
    }
  }

  const updateNumber = (name) => {
    const person = persons.find(p => p.name === name)
    const changedPerson = {...person, number: newNumber}

    servicePerson
      .replaceNumber(changedPerson.id, changedPerson)
      .then(response => {
        setPersons(persons.map(p => {
          return (
            p.id !== changedPerson.id
            ? p
            : response
          )
        }
          ))
        setNewName("")
        setNewNumber("")       
      })
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification 
        message={successMessage} 
        type={messageType}
      />
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