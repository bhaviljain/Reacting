import React from 'react'
import { Link } from 'react-router-dom'
import  { useContext } from 'react'
import { ThemeContext } from './Context'


export const Nav = () => {
  const {theme,toggleTheme} = useContext(ThemeContext)
    console.log(theme);
  return (
    <>    <div>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <input type="checkbox"
        onChange={toggleTheme}
        checked = {theme === "dark"}
        />

    </div>
    </>

  )
}
