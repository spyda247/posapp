import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div class="logo-wrapper">
        <span aria-label="logo" role="img" className="logo">
          PA
        </span>
        <span className="logo-text">PosApp</span>
      </div>
      <div class="table-info">
        <div class="table-info-details">
          <h3>Table 5</h3>
          <p>Bolawa A</p>
        </div>
        <div class="table-info-utility">#</div>
      </div>
    </div>
  )
}

export default Header
