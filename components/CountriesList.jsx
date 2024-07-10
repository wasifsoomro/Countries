import React, { useEffect } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard'
import { useState } from 'react'
import CountriesListShimmer from './CountriesListShimmer'
import useFilterData from '../hooks/useFilter'

const filterByQuery = (query) => (data) => {
  if(!query){
    return data
  }else {
    return data.filter(item => item.name.common.toLowerCase().includes(query))
  }
}

const filterByRegion = (selectRegion) => (data) => {
  if(selectRegion === 'Filter by Region'){
    return data
  }else {
    return data.filter(item => item.region === selectRegion)
  }  
}

export default function CountriesList({query, selectRegion}) {

  const [countriesData, setCountriesData] = useState([])

  const {filteredData, updateFilters} = useFilterData(countriesData)
  
  
 
  // const [count, setCount] = useState(0)
  useEffect(()=>{
      fetch(' https://restcountries.com/v3.1/all')
       .then((res)=> res.json())
       .then((data)=>{
         setCountriesData(data)

       updateFilters([filterByQuery(query), filterByRegion(selectRegion)]) 
     })
  }, [ ])

  useEffect(()=>{
    updateFilters([filterByQuery(query), filterByRegion(selectRegion)])
  }, [query, selectRegion])



 if(countriesData.length === 0){
  return <CountriesListShimmer  />
 }
  return (
    <>
    <div className="countries-container">
      {filteredData && filteredData.map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
          />
        )
      })}
    </div>
    {/* <div>
    {filterData.map((country) => country )}   
    </div> */}
   

     {/* <h1>{count}</h1>
     <button onClick={() => setCount(count + 1)}>Remove All Countries</button> */}
   
    </>
  )
}