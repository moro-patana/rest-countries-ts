import React, {useContext} from 'react'
import { Link, useParams } from "react-router-dom"
import { Context } from "./GlobalContext"
import styled from "styled-components"

const DetailsContainer = styled.div`
 display: flex;
 flex-direction: row;
 gap: 30px;
 align-items: center;
   ul {
       padding-left: 0;
   }
 
`;
const DetailsContent = styled.div`
 display: flex;
 flex-direction: row;
 gap: 10px;
`;
const List = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
const Image =styled.img`
width: 100%;
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
const ButtonList = styled.ul`
    padding-left: 0;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
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
            <DetailsContainer>
                <figure><Image src={country?.flag} alt="Flag"/></figure>
                <div>
                    <h2>{country?.name}</h2>
                    <DetailsContent>
                        <ul key={country?.name}>
                            <List><b>Native Name:</b> {country?.nativeName}</List>
                            <List><b>Population:</b> {country?.population}</List>
                            <List><b>Region:</b> {country?.region}</List>
                            <List><b>Subregion:</b> {country?.subregion}</List>
                            <List><b>Capital:</b> {country?.capital}</List>
                        </ul>
                        <ul>
                            <List><b>ToplevelDomain:</b> {country?.topLevelDomain}</List>
                            <List><b>Currencies:</b>
                            {country?.currencies.map(item => (
                                <ul key={item.name}>
                                    <List>{item.name}</List>
                                </ul>
                            ))}
                            </List>
                            <List><b>Languages:</b> {country?.languages.map(item => (
                                <ul key={item.name}>
                                    <List>{item.name}</List>
                                </ul>
                            ))}</List>
                        </ul>
                    </DetailsContent>
                    <ButtonContainer>
                        <p>Border countries:</p>
                        <ButtonList>{country?.borders.map(index => (
                            <Link to={`/country/${country?.name}`}>
                                <List>{index}</List>
                            </Link>
                        ))}</ButtonList>
                    </ButtonContainer>
                </div>
            </DetailsContainer>
        </div>
    )
}
export default CountryDetails;
