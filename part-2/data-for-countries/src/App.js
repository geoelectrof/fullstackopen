import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "https://restcountries.com/v3.1/all"

function App() {
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    axios
    .get(baseUrl)
    .then(request => {
      console.log(request.data)
      setAllCountries(request.data)
    })
    .catch(error => console.log(error))
  }, [])


  return (
    <div className="App">    
        {allCountries.map(country => 
          <div>
            <h1>{country.name.common}</h1>
            <h2>{country.region}</h2>
          </div>          
        )}
      
    </div>
  );
}

export default App;
