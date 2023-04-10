import React from 'react'
import './MenuList.css'

const MenuList = () => {
  return (
    <div className="menu-list">
      <div className="menu food">
        <span className="icon" role="img" aria-label="food">
          &#x1F372;
        </span>
        <div>
          <h3 className="item-title">Food</h3>
          <p className="item-details">13 items</p>
        </div>
      </div>
      <div className="menu soups active">
        <span className="icon" role="img" aria-label="soups">
          &#x1F958;
        </span>
        <div>
          <h3 className="item-title">Soups</h3>
          <p className="item-details">12 items</p>
        </div>
      </div>
      <div className="menu fries">
        <span className="icon" role="img" aria-label="fries">
          &#x1F35F;
        </span>
        <div>
          <h3 className="item-title">Fries</h3>
          <p className="item-details">20 items</p>
        </div>
      </div>
      <div className="menu barbeque">
        <span className="icon" role="img" aria-label="barbeque">
          &#x1F357;
        </span>
        <div>
          <h3 className="item-title">Barbeque</h3>
          <p className="item-details">15 items</p>
        </div>
      </div>
      <div className="menu drinks">
        <span className="icon" role="img" aria-label="drinks">
          &#x1F37E;
        </span>
        <div>
          <h3 className="item-title">Drinks</h3>
          <p className="item-details">25 items</p>
        </div>
      </div>
      <div className="menu spirits">
        <span className="icon" role="img" aria-label="spirits">
          &#x1F943;
        </span>
        <div>
          <h3 className="item-title">Spirits</h3>
          <p className="item-details">5 items</p>
        </div>
      </div>
      <div className="menu beer">
        <span className="icon" role="img" aria-label="beer">
          &#x1F37A;
        </span>
        <div>
          <h3 className="item-title">Beer</h3>
          <p className="item-details">40 items</p>
        </div>
      </div>
      <div className="menu deserts">
        <span className="icon" role="img" aria-label="deserts">
          &#x1F370;
        </span>
        <div>
          <h3 className="item-title">Deserts</h3>
          <p className="item-details">8 items</p>
        </div>
      </div>
    </div>
  )
}

export default MenuList
