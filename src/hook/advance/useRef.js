import React, { useRef, useState, useEffect } from 'react'
import '@styles/UseRef.scss'
import { Button } from 'antd'
// Lưu ý khi sử dụng useRef
// - thay đổi giá trị current của useRef sẽ không khiến component bị re-render lại
const UseRef = () => {
  return (
    <div className='useRefWrapper'>
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      <Example3 />
    </div>
  )
}

export default UseRef

const Example1 = () => {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  )
}

// start stop function
const Example2 = () => {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 500);
  };
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div className="buttonWrapper">
        <Button size="large" className="startButton" onClick={startHandler}>Start</Button>
        <Button size="large" className="stopButton" onClick={stopHandler}>Stop</Button>
      </div>
    </div>
  );
}

// drawler using Ref
const Example3 = () => {
  const drawlerRef = useRef(null)
  const buttonRef = useRef(null)
  const [isOpenDrawler, setIsOpenDrawler] = useState(false)

  useEffect(() => {
    const handleClickOutsideDrawler = (event) => {
      const conditionClickOutsideDrawler = (drawlerRef.current && !drawlerRef.current.contains(event.target))
      if (conditionClickOutsideDrawler) setIsOpenDrawler((prev) => !prev)
    }

    const handleClickButton = (event) => {
      const conditionClickButton = buttonRef.current && buttonRef.current.contains(event.target)
      if (conditionClickButton) setIsOpenDrawler((prev) => !prev)
    }

    document.addEventListener("click", handleClickOutsideDrawler, true);
    document.addEventListener("click", handleClickButton, true)
    // Clean up
    return  () => {
      document.removeEventListener("click", handleClickOutsideDrawler, true)
      document.removeEventListener("click", handleClickButton, true)
    }
  }, [drawlerRef])



  return (
    <div>
      <button ref={drawlerRef}>Click</button>
      <div ref={drawlerRef} className={`drawlerStyle ${isOpenDrawler ? 'openDrawler' : 'closeDrawler'}`}>
        {isOpenDrawler ? "Open Drawler" : "Close Drawler"}
      </div>
    </div>
  )
}