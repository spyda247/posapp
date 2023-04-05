import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <span aria-label="logo" role="img" className="logo">
          PA
        </span>
        <span className="logo-text">PosApp Waiter</span>
      </div>
      <div className="table-info">
        <div className="table-info-details">
          <h3>Table 5</h3>
          <p>Bolawa A</p>
        </div>
        <div className="table-info-utility">#</div>
      </div>
    </div>
  )
}

export default Header
