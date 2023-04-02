import React from 'react'
import Orders from '../Orders/Orders'
import './TableDetails.css'

const TableDetails = () => {
  return (
    <div className="table-details">
      <h2 className="table-number">T2</h2>
      <div>
        <h3>Segun</h3>
        <Orders />
      </div>
      <span className="order-status"></span>
    </div>
  )
}

export default TableDetails
