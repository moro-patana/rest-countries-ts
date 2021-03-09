import React, {useContext} from 'react'
import { Link, useParams } from "react-router-dom"
import { Context } from "./GlobalContext"

interface ParamTypes {
    countryName: string
  }
const CountryDetails: React.FC<{}> = () => {
    
    const { results} = useContext(Context);
    const { countryName } = useParams<ParamTypes>()
    
    
    const country = results.find(res => res.name === countryName)
    


    return (
        <div>
            <Link to="/">Back</Link>
            <h1>Details</h1>
            <div>
                <figure><img src={country?.flag} alt="Flag"/></figure>
                <div>
                    <ul>
                        <li>Native Name: {country?.nativeName}</li>
                        <li>Population: {country?.population}</li>
                        <li>Region: {country?.region}</li>
                        <li>Subregion: {country?.subregion}</li>
                        <li>Capital: {country?.capital}</li>
                    </ul>
                    <ul>
                        <li>ToplevelDomain</li>
                        <li>Currencies</li>
                        <li>Languages</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CountryDetails;
