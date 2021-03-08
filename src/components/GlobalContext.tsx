import React, { useEffect, createContext } from 'react'
const endPoint = "https://restcountries.eu/rest/v2/all"


export const initialValues = {
    countries: []
}

export const GlobalContext = createContext(initialValues)
 export const GlobalContextProvider: React.FC = ({children}) => {

    async function fetchData() {
    const response = await fetch(endPoint)
    const data = await response.json()
    console.log(data);
    
    }
    useEffect(() => {
       fetchData()
    }, [])
    return (
        <GlobalContext.Provider value={{countries: []}}>
            {children}
        </GlobalContext.Provider>
    )
}
