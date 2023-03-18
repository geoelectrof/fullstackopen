import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import weatherService from '../services/weather'

const Country = (props) => {

  const baseCapitalUrl = `http://api.openweathermap.org/geo/1.0/direct?q="${props.country.capital}"&limit=5&appid=${process.env.REACT_APP_API_KEY}`
  
  const [capitalWeather, setCapitalWeather] = useState(null)
  
  
  useEffect(() => {
    // const getAxiosAll = () => {
    //   axios.get(baseCapitalUrl)
    //     .then(response => {
    //       console.log('response.data', response.data)
    //       const {lat, lon} = response.data[0]
    //       const capitalLatLonUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    //       axios.get(capitalLatLonUrl)
    //         .then(weather => setCapitalWeather(weather.data))
    //     })
    // }
    // getAxiosAll()
    weatherService
      .getAxiosAll(baseCapitalUrl)
        .then(currentWeather => {
          setCapitalWeather(currentWeather)
        })
  }, [])
  
  if (!capitalWeather) {
    return null
  }

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
        <img src={props.country.flags.png} alt={props.country.name}/>
        <h2>Weather in {props.country.capital}</h2>
        <p>temperature {(capitalWeather?.main.temp - 273.15).toFixed(2)} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${capitalWeather?.weather[0].icon}@2x.png`} alt={props.country.name}/>
        <p>wind {capitalWeather?.wind.speed} m/s</p>
    </>
  )
}

export default Country