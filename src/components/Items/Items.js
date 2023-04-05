import React from 'react'
import Calculate from '../Calculate/Calculate'
import Item from '../Item/Item'
import './Items.css'

const Items = () => {
  return (
    <div className="items">
      <Item />
      <Calculate />
    </div>
  )
}

export default Items
