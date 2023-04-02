import React from 'react'

const Items = () => {
  return (
    <div className="items">
      <div>
        <div className="item-details">
          <div className="item-number">1</div>
          <div>
            <span className="item-description">Cowtail Soup</span>x
            <span className="item-quantity">2</span>
          </div>
        </div>
        <div className="item-price">
          <span>&#8358;3000.00</span>
        </div>
      </div>
      <div>
        <div className="item-details">
          <div className="item-number">2</div>
          <div>
            <span className="item-description">Heinekien</span>x
            <span className="item-quantity">4</span>
          </div>
        </div>
        <div className="item-price">
          <span>&#8358;2000.00</span>
        </div>
      </div>
    </div>
  )
}

export default Items
