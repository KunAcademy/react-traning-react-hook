import React, { useCallback, useEffect, useState } from "react";
import "@styles/UseEffect.scss";
import { Button } from "antd";

const UseEffect = () => {
  return (
    <div className="useEffectWrapper">
      {/* <Example1 /> */}
      <Example2 />
    </div>
  );
};

export default UseEffect;

// Fetching data
const Example1 = () => {
  const [data, setData] = useState();
  const [typeDataGet, setTypeDataGet] = useState("users");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${typeDataGet}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [typeDataGet]);

  const renderData = useCallback(() => {
    if (typeDataGet === "albums" || typeDataGet === "posts") {
      return (
        data &&
        data?.map((item) => <div className="title">Title: {item?.title}</div>)
      );
    }
    return (
      data &&
      data?.map((item) => <div className="title">Name: {item?.name}</div>)
    );
  }, [data, typeDataGet]);

  const handleSetTypeDataGet = (value) => {
    setTypeDataGet(value);
  };

  return (
    <div>
      <div>{renderData()}</div>
      <div className="buttonWrapper">
        <Button onClick={() => handleSetTypeDataGet("posts")}>Posts</Button>
        <Button onClick={() => handleSetTypeDataGet("albums")}>Albums</Button>
        <Button onClick={() => handleSetTypeDataGet("users")}>Users</Button>
      </div>
    </div>
  );
};

// handle with setTimeout
const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div>Render {count} times</div>;
};
