import React, { useCallback, useState } from 'react'
import '@styles/UseCallback.scss'
import { Button } from 'antd';
import List from './List'

// Lưu ý: useCallback khá tương đồng với useMemo. Điểm khác biệt là useMemo truyền vào là 1 hàm và trả về giá trị của hàm đó
// còn useCallback sẽ trả về chính hàm đấy chứ không phải giá trị của hàm đó
// Link tìm hiểu: https://hackernoon.com/react-hooks-what-is-the-difference-between-usecallback-and-usememo

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const getItems = useCallback(() => {
    return [Number(number), Number(number) + 1, Number(number) +2]
  }, [number])

  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  return (
    <div className="useCallbackWrapper">
      <input value={number} type="number" onChange={(e) => setNumber(e.target.value)} />
      <Button onClick={toggleDarkTheme}> Toggle Theme </Button>
      <div className={`blockStyle ${isDarkTheme ? 'darkTheme' : 'whiteTheme'}`}>
        <List getItems={getItems} />
      </div>

    </div>
  )
}

export default UseCallback