import React, { useContext } from 'react'
import { Context } from "./GlobalContext"
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Head from "../components/Head"


const Container = styled.div`
  padding: 1rem;

  a {
      text-decoration: none;
      color: black;
      width: 300px;
    height: 500px;
  }
`;
const Image =styled.img`
    width: 100%;
`;
const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`;
const CountryCard = styled.div`
background-color: white;
`;
const Title = styled.h2`
 margin: 0;
 padding-top: 30px;
 padding-right: 50px;
 padding-left: 50px;
`;
const List = styled.ul`
padding: 50px;
display: flex;
flex-direction: column;
gap: 20px;

`;
const ListItem = styled.li`
list-style: none;
`;
const CountriesList: React.FC<{}> = () => {
    const { results, error, loading} = useContext(Context);
    

    return (
      <Container>
        {loading && <div>Loading...</div>}
        <Head/>
        <Card>
          {!loading && results.map(country => (
              <Link to={`/country/${country.alpha3Code}`} key={country.name}>
              <CountryCard key={country.name}>
                  <Image src={country.flag} alt="Flag"/>
                  <Title>{country.name}</Title>
                  <List>
                      <ListItem>Population: {country.population}</ListItem>
                      <ListItem>Region: {country.region}</ListItem>
                      <ListItem>Capital: {country.capital}</ListItem>
                  </List>
              </CountryCard>
              </Link>
            ))}
        </Card>
        {error && (
          <div>Error, the backend moved to the dark side.</div>
        )}
      </Container>
    );
  };
  
  export default CountriesList;
