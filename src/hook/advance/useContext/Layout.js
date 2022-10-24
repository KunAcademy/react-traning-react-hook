import React, { useContext } from 'react'
import { ThemeContext } from './useContext'

const Layout = () => {
  const isDarkTheme = useContext(ThemeContext)

  return (
    <div className={`blockStyle ${isDarkTheme ? 'darkTheme' : 'whiteTheme'}`}>
      {isDarkTheme ? 'Dark Theme' : 'White Theme'}
    </div>
  )
}

export default Layout