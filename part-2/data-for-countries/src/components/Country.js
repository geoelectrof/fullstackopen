import React from 'react'
import { useState, useEffect } from 'react'

const Country = (props) => {
    console.log('props.country.languages', props.country.languages)
    const [capitalWeather, setCapitalWeather] = useState(null)
    
    
    const getAll = () => {
          fetch(
      // "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=30ef5f54a220b10c10cac8644ccc3440"
      `http://api.openweathermap.org/geo/1.0/direct?q="${props.country.capital}"&limit=5&appid=30ef5f54a220b10c10cac8644ccc3440`
      // `http://api.openweathermap.org/geo/1.0/direct?q="${city}"&limit=5&appid=30ef5f54a220b10c10cac8644ccc3440`
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { lat, lon } = data[0]
      console.log(`This is lat: ${lat} and this is lon: ${lon}`)

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=30ef5f54a220b10c10cac8644ccc3440`)
      .then(res => res.json())
      .then( weather=> {
        console.log(weather)
        setCapitalWeather(weather)
        console.log('weather.weather[0].main', weather.weather[0].main)
        console.log('weather.main.temp - 273.15', weather.main.temp - 273.15)
        console.log('weather.weather[0].icon', weather.weather[0].icon)
        // const icon = weather.weather[0].icon
        // finalicon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        // console.log('finalicon', finalicon)
        return `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      })
    })
    }

    useEffect(() => {
      getAll()
    }, [])
    
    console.log('capitalWeather', capitalWeather)
    // let finalicon = getAll();
    
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
        {/* <p>temperature {(capitalWeather?.main.temp - 273.15).toFixed(2)} Celcius</p> */}
        <img src={`https://openweathermap.org/img/wn/${capitalWeather?.weather[0].icon}@2x.png`} alt={props.country.name}/>
        <p>wind {capitalWeather?.wind.speed} m/s</p>
    </>
  )
}

export default Country