import React from 'react'
import Person from './Person'

const Persons = (props) => {

    const displayPersons = () => {
        const regex = new RegExp(props.newSearch, 'gi')
        const newArr = props.persons.filter( person => {
          return person.name.match(regex)
        })
        return newArr
      }

  return (
    // {/* {persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)} */}
    // {props.displayPersons().map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    <div>
        {/* {displayPersons().map(person => <div key={person.name}>{person.name} {person.number}</div>)} */}
        {displayPersons().map(person => {
            return (
                <Person
                    key = {person.name}
                    name = {person.name}
                    number = {person.number}
                    id = {person.id}
                    handleDelete = {props.handleDelete}
                />
            )
        })}
        
    </div>
  )
}

export default Persons