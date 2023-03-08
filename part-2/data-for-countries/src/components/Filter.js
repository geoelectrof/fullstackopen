import React from 'react'

const Filter = (props) => {
  return (
    <div>
        find countries <input value={props.newSearch} onChange={props.handleChange}></input>
    </div>
  )
}

export default Filter