import React, { useEffect, useState } from 'react'
import { CountryData, Service } from "./interfaces"
const endPoint = "https://restcountries.eu/rest/v2/all"

export interface CountriesData {
    results: CountryData[];
  }

  export default function GlobalContextProvider() {
      const [countries, setCountries] = useState<Service<CountriesData>>({
          status: 'loading'
      });

      useEffect(() => {
        fetch(endPoint)
          .then(response => response.json())
          .then(response => setCountries({ status: 'loaded', payload: response }))
          .catch(error => setCountries({ status: 'error', error }));
      }, []);
    
      return countries;
  }
