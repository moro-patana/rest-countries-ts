import React, { useContext } from 'react'
import { Context } from "./GlobalContext"

const CountriesList: React.FC<{}> = () => {
    const { results, error, loading} = useContext(Context);
    

    return (
      <div>
        {loading && <div>Loading...</div>}
        {!loading && results.map(country => (
            <div key={country.name}>{country.name}</div>
          ))}
        {error && (
          <div>Error, the backend moved to the dark side.</div>
        )}
      </div>
    );
  };
  
  export default CountriesList;
