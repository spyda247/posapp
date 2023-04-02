import React from 'react'
import './OrderDetails.css'

const OrderDetails = () => {
  return (
    <>
      <div className="order-details">
        <p>
          <span className="order-total">8 Orders</span>
          <span className="order-icon">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
          <span className="order-department">Bar</span>
        </p>
      </div>
      <div className="order-details">
        <p>
          <span className="order-total">4 Orders</span>
          <span className="order-icon">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
          <span className="order-department">Kitchen</span>
        </p>
      </div>
    </>
  )
}

export default OrderDetails