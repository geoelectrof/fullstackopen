import Countries from "./components/Countries";
import Filter from "./components/Filter";

import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "https://restcountries.com/v3.1/all"


function App() {
  const [allCountries, setAllCountries] = useState([])
  const [newSearch, setNewSearch] = useState("")

  useEffect(() => {
    axios
    .get(baseUrl)
    .then(request => {
      // console.log(request.data)
      setAllCountries(request.data)
    })
    .catch(error => console.log(error))
  }, [])
  
  const handleChange = (event) => {
    setNewSearch(event.target.value)
  }

  const showCountry = (name) => {
    // console.log(name)
    setNewSearch(name)
  }

  return (
    <div className="App">   
      <Filter 
        newSearch={newSearch}
        handleChange={handleChange}
      />
      <Countries 
        countries={allCountries}
        newSearch={newSearch}
        handleClick={showCountry}
      />
    </div>
  );
}

export default App;
