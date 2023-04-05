import React from 'react'
import './Item.css'

const Item = () => {
  return (
    <div className='item'>
      <div className="item-wrapper">
        <div className="item-details">
          <div className="item-sub-detail">
            <div className="item-number">1</div>
            <span className="item-description">Cowtail Soup</span>x
            <span className="item-quantity">2</span>
          </div>
          <div className="item-price">
            <span>&#8358;3000.00</span>
          </div>
        </div>
      </div>
      <div className="item-wrapper">
        <div className="item-details">
          <div className="item-sub-detail">
            <div className="item-number">2</div>
            <span className="item-description">Heinekien</span>x
            <span className="item-quantity">4</span>
          </div>
          <div className="item-price">
            <span>&#8358;2000.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item