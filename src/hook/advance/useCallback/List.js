import React, { useState, useEffect } from 'react'

const List = ({ getItems }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems())
    console.log("items:", items)
  }, [getItems])
 
  return (
    <div>
      {items.map((item) => <div>{item}</div>)}
    </div>
  )
}

export default List