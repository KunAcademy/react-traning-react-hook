import React, { useState, useMemo } from 'react'
import '@styles/UseMemo.scss'
import { Button } from 'antd';
// Lưu ý:
// Tương tự với useEffect ta sử dụng useMemo với trường hợp là object type thì ta nên lưu ý là 
// object phân biệt với nhau bởi địa chỉ ô nhớ chứ không phải value.
const UseMemo = () => {
  return (
    <div className="useMemoWrapper">
      <Example1 />
    </div>
  )
}

export default UseMemo;

const Example1 = () => {
  const [count, setCount] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  const slowFunction = (value) => {
    for (let i = 0; i < 100000; i++) {}
    return value * 2
  }

  
  const doubleNumber = useMemo(() => slowFunction(count), [count]);

  return (
    <div>
      <input value={count} type="number" onChange={(e) => setCount(e.target.value)} />
      <Button onClick={toggleDarkTheme}> Toggle Theme </Button>
      <div className={`blockStyle ${isDarkTheme ? 'darkTheme' : 'whiteTheme'}`}>{doubleNumber}</div>
    </div>
  )
}