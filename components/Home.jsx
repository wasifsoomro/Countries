import SearchBar from "./searchbar"
import SelectMenu from "./SelectMenu"
import CountriesList from "./CountriesList"
import { useState } from "react"
import { useTheme } from "../hooks/useTheme"

export default function Home() {
    const [query, setQuery] = useState('')
    const [selectRegion, setSelectRegion] = useState('Filter by Region')
    const [isDark] = useTheme()
  
  return (

    <main className={`${isDark? 'dark': ''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu selectRegion={selectRegion} setSelectRegion={setSelectRegion}/>
        </div>
           {
            query === 'unmount'? "" : <CountriesList query={query} selectRegion={selectRegion}/>
           }
           
    </main>
  )
}
