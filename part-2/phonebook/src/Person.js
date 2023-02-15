import React from 'react'

const Person = (props) => {
  return (
    <div>{props.name} {props.number} <button onClick={()=>console.log(props.id)}>delete</button></div>
  )
}

export default Person