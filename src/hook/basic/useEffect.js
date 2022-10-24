import React, { useCallback, useEffect, useState } from "react";
import "@styles/UseEffect.scss";
import { Button } from "antd";
// Lưu ý khi dùng useEffect
// - Luôn sử dụng dependency để truyền vào hàm useEffect tránh cho việc re-render lại nhiều lần
// - Tránh sử dụng object là dependency cho hàm useEffect vì với việc so sánh 2 object không phụ thuộc vào giá trị mà phụ
// thuộc vào địa chỉ ô nhớ của object đó. Khi ta sử dụng state có type là object thì mỗi khi setState thì bản chất
// giá trị của state có thể giữ nguyên những địa chỉ ô nhớ của state đó đã bị thay đổi việc đó sẽ trigger hàm useEffect.

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

// get windows width 
const Example2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[])

  return <div>{windowWidth}</div>
};
