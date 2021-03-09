import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CountriesList from "./components/CountriesList"
import CountryDetails from './components/CountryDetails'
import styled from "styled-components"

const Container = styled.div`
 background-color: gainsboro;
`;
const Title = styled.h1`
 margin: 0;
 padding: 1rem;
`;
export default function App() {
  return (
    <Container>
      <Title>Rest Countries</Title>
      <Router>
        <Switch>
          <Route exact path="/"><CountriesList/></Route>
          <Route path="/country/:countryName"><CountryDetails/></Route>
        </Switch>
      </Router>
    </Container>
  )
}
