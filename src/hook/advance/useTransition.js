import React, { useState, useTransition } from 'react'
import '@styles/UseTransition.scss'

// useTranstion là hook được sử dụng ở phiên bản React 18
// useTransition được sử dụng để nói cho React biết sự thay đổi state của nào là ưu tiên thực hiện trước và sự thay đổi state nào 
// là ưu tiên thực hiện sau 
const UseTransition = () => {
  // useTransition mình sẽ lấy giá trị isPending và hàm startTrasition.
  // hàm startTrasition sẽ có nhiệm vụ là giảm độ ưu tiên cho những tác vụ setState mà hàm đó bọc
  // isPending sẽ trả về trạng thái state đang được để trong trạng thái chờ.
  const [ isPending, startTrasition ] = useTransition();
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
    const cloneList = [];
    startTrasition(() => {
      for (let i = 0; i < 20000; i++) {
        cloneList.push(event.target.value)
      }
      setList(cloneList)
    })
  }
  
  return (
    <div className="useTransitionWrapper">
      <input value={input} onChange={handleChange} />
      {isPending ? <div>Pending... </div> : (
        <div className="listStyle">
          {list.map((item, index) => <div key={index}>{item}</div>)}
        </div>
      )}
    </div>
  )
}

export default UseTransition