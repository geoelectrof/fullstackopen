import React from 'react'

const Countries = ({ countries }) => {
    console.log(countries)
  return (
    <div>
        {countries.map((country, index) => 
            <p
                key = {index}
            >
                {country.name.common}
            </p>
        )}
    </div>
  )
}

export default Countries