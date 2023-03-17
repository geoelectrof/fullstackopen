import React from 'react'
import Country from './Country'

const Countries = (props) => {

    const displayCountries = () => {
        const regex = new RegExp(props.newSearch, 'gi')
        const newArr = props.countries.filter( country => {
            return country.name.common.match(regex)
        })
        return newArr
    }
    
    // console.log('displayCountrie().length', displayCountries().length)

    if (displayCountries().length > 9) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (displayCountries().length === 1) {

        return(
            <div>
                {
                    displayCountries().map((country) => 
                        <Country 
                            key={country.name.common}
                            country={country}
                        />
                    )
                }
            </div>
        )
    }

    return (
        <div>
            {
                displayCountries().map((country) => 
                    <p key={country.name.common}>
                        {country.name.common}
                        <button onClick={()=>props.handleClick(country.name.common)}>show</button>
                    </p>
                )
            }
        </div>
    )
}

export default Countries