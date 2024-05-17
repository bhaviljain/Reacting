import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [dark,setDark] = useState(false)
    const toggleTheme = () =>{
        setDark((prev=> !prev))
    }
    const theme = dark ? "dark" : "light"
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
    },[dark])
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
         {children}
        </ThemeContext.Provider>
    )
}


