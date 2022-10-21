import React, { useState } from "react";
import { Button, Modal } from "antd";
import "@styles/UseState.scss";

const UseState = () => {
  return (
    // <Example1 />
    // <Example2 />
    <Example3 />
  );
};

export default UseState;
// handle state
const Example1 = () => {
  const [count, setCount] = useState(0);
  const handleIncreaseNumber = () => setCount((prev) => prev + 1);
  const handleDecreaseNumber = () => setCount((prev) => prev - 1);
  const handleDoubleValue = () => setCount((prev) => prev * 2);

  return (
    <div className="useStateWrapper">
      <p>{count}</p>
      <div className="buttonWrapper">
        <Button onClick={handleIncreaseNumber}>Increase</Button>
        <Button onClick={handleDecreaseNumber}>Decrease</Button>
        <Button onClick={handleDoubleValue}>Double Value</Button>
      </div>
    </div>
  );
};

// Show/Hide Component
const Example2 = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalText, setIsShowModalText] = useState(false);

  const handleClick = () => setIsShowModal((prev) => !prev);
  const handleShowModalText = () => setIsShowModalText((prev) => !prev);

  return (
    <div className="useStateWrapper">
      <Button onClick={handleClick}>Click to open Modal</Button>
      <Modal open={isShowModal} onOk={handleClick} onCancel={handleClick}>
        <div>This is example Modal</div>
        {isShowModalText && <div>This text is show</div>}
        <Button onClick={handleShowModalText}>Show Text</Button>
      </Modal>
    </div>
  );
};

// handle with array
const Example3 = () => {
  const [fruits, setFruits] = useState([""]);

  const renderFruits = () => {
    return fruits.map((fruit) => <div>{fruit}</div>);
  };

  const handleAddFruit = (value) => {
    const cloneFruit = [...fruits, value];
    setFruits(cloneFruit);
  };

  return (
    <div className="useStateWrapper">
      <div className="fruitWrapper">{renderFruits()}</div>
      <div>
        <Button onClick={() => handleAddFruit("orage")}>Add orange</Button>
        <Button onClick={() => handleAddFruit("lemon")}>Add lemon</Button>
        <Button onClick={() => handleAddFruit("apple")}>Add apple</Button>
      </div>
    </div>
  );
};


// Homework: Build a todolist with create, update, delete and edit functionality.