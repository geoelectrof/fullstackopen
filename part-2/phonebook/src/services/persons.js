import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
    // const request = axios.get(baseUrl)
    // return request.then(response => response.data)
}

const create = (newPerson) => {
    return axios.post(baseUrl, newPerson).then(request => request.data)
}

export default { getAll, create }