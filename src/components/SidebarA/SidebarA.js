import React from 'react'
import './SidebarA.css'

const SidebarA = () => {
  return (
    <div className="navigation">
      <div className="nav-list">
        <ul>
          <li>Reservation</li>
          <li>Table services</li>
          <li>Menu</li>
          <li>Delivery</li>
          <li>Accounting</li>
        </ul>
      </div>
      <div className="user">
        <ul className="user-list">
          <li>
            <span>B</span>Bolawa A.
          </li>
          <li>
            <span>T</span>Taiwo K.
          </li>
          <li>
            <span>S</span>Segun D.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidebarA