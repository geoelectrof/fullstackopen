import React from 'react'

const Person = (props) => {
    console.log(props.name)
  return (
    <div>{props.name} {props.number}</div>
  )
}

export default Person