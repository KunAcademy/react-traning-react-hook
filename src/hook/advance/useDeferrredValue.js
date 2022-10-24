import React, { useState, useDeferredValue, useEffect } from 'react'
import '@styles/UseDeferredValue.scss'

// useDeferredValue khá tương tự với useDebounce, sẽ đợi một khoảng thời gian rồi mới thực hiện action 
// cả useDeferredValue vs useTransition đều sử dụng cho tránh lag hệ thống.
const UseDeferredValue = () => {
  return (
    <div className="useDeferredValueWrapper">
      <Example1 />
    </div>
  )
}

export default UseDeferredValue

const Example1 = () => {
  const [input, setInput] = useState("")
  const handleChange = (event) => {
    setInput(event.target.value)  
  }

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <List input={input} />
    </div>
  )
}

const List = ({ input }) => {
  const [list, setList] = useState([])
  const deferredInput = useDeferredValue(input);
  
  useEffect(() => {
    if (deferredInput) {
      const cloneList = []
      for (let i = 0; i < 20000; i++) {
        cloneList.push(deferredInput)
      }
      setList(cloneList)
    }
  }, [deferredInput])


  return (
    <div className="listStyle">
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}