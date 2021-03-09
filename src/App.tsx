import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CountriesList from "./components/CountriesList"

export default function App() {
  return (
    <div>
      <h1>Rest Countries</h1>
      <CountriesList/>
    </div>
  )
}
