import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { ThemeProvider } from "./contexts/ThemeContext"

import './App.css'


function App(){
    return(
        <>
        <ThemeProvider>
         <Header  />
         <Outlet />
        </ThemeProvider>
        </>
    )
}

export default App 