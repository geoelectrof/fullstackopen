import Countries from "./components/Countries";
import Filter from "./components/Filter";

import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "https://restcountries.com/v3.1/all"


function App() {
  const [allCountries, setAllCountries] = useState([])
  const [newSearch, setNewSearch] = useState("")

  const handleChange = (event) => {
    setNewSearch(event.target.value)
  }

  useEffect(() => {
    axios
    .get(baseUrl)
    .then(request => {
      // console.log(request.data)
      setAllCountries(request.data)
    })
    .catch(error => console.log(error))
  }, [])


  return (
    <div className="App">   
      <Filter 
        newSearch={newSearch}
        handleChange={handleChange}
      />
      <Countries 
        countries={allCountries}
        newSearch={newSearch}
      />
    </div>
  );
}

export default App;
