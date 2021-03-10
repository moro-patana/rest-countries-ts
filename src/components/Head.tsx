import React, {useContext, useState, useEffect} from 'react'
import { Context } from "./GlobalContext"



export default function Head() {
    const { results, setCountries} = useContext(Context);
    const [location, setLocation] = useState("")
    console.log(setCountries);
    function filterCountry() {
        const searchByCountryName = results.filter(item => item.name.toLowerCase().includes(location.toLocaleLowerCase()))
        console.log(searchByCountryName)
    }
    useEffect(() => {
       filterCountry()
    }, [location])
    return (
        <div>
            <form className="search-city">
                <fieldset>
                    <i className="ri-earth-line"></i>
                    <input
                        type="text"
                        placeholder="Search for a country"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </fieldset>
            </form>
                    <select name="pets" id="pet-select">
                        <option value="">Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
            </div>
    )
}
