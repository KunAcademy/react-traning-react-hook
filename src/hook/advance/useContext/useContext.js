import React, { useState } from 'react'
import '@styles/UseContext.scss'
import Layout from './Layout'
import { Button } from 'antd'

const UseContext = () => {
  return (
    <div className="useContextWrapper">
      <Example1 />
    </div>
  )
}

export default UseContext

export const ThemeContext = React.createContext()

const Example1 = () => {
  // bài tập export hàm toggleTheme sao cho file Layout vẫn có thể sử dụng được hàm toggleTheme
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const handleToggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  return (
    <div className="useContextWrapper">
      <Button onClick={handleToggleTheme}>Toggle Theme</Button>
      <ThemeContext.Provider value={isDarkTheme}>
        <Layout />
      </ThemeContext.Provider>
    </div>
  )
}