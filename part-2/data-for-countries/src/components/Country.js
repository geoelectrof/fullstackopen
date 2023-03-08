import React from 'react'

const Country = (props) => {
    console.log('props.country.languages', props.country.languages)
  return (
    <>
        <h1>{props.country.name.common}</h1>
        {props.country.capital}
        <br />
        {props.country.area}
        <p>
            <strong>languages:</strong>
            <ul>
                {Object.values(props.country.languages).map(language => <li>{language}</li>)}
            </ul>
        </p>
        <img src={props.country.flags.png} />
    </>
  )
}

export default Country