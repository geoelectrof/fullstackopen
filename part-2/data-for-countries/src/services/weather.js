import axios from "axios"

const getAxiosAll = (baseCapitalUrl) => {
    return (
        axios.get(baseCapitalUrl)
            .then(response => {
                console.log('response.data', response.data)
                const {lat, lon} = response.data[0]
                const capitalLatLonUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
                const request = axios.get(capitalLatLonUrl)
                    return request.then(weather => weather.data)
            }))
}

export default { getAxiosAll: getAxiosAll}