import React, { useEffect, useState, createContext } from 'react'
import { CountryData} from "./interfaces"

export interface CountriesData {
    results: CountryData[]; 
    loading: boolean;
    error: string;
    countryName: string;
    country: []

  }

const initialValues: CountriesData = {
  results: [], 
  loading: true,
  error: '',
  countryName: '',
  country: []
}

  export const Context = createContext(initialValues);

  export const ContextProvider: React.FC = ({children}) => {
      const [countries, setCountries] = useState([]);
      const [error, setError] = useState('');
      const [loading, setLoading] = useState(true);


      useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
          .then(response => response.json())
          .then(response => setCountries(response))
          .then( () => setLoading(false))
          .catch(() => setError("Failed"));
      }, []);
      
      return (
        <Context.Provider value={{results: countries, loading: loading, error: error, countryName: '', country: []}}>
          {children}
        </Context.Provider>
      )
  }

  
