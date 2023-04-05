import React from 'react'
import './Calculate.css'

const Calculate = () => {
  return (
    <div className="calculate-wrapper">
      <div className="calculate-item">
        <p>Subtotal</p>
        <div className="amount">
          <span>&#8358;5000.00</span>
        </div>
      </div>
      <div className="calculate-item">
        <p>VAT 7.5%</p>
        <div className="amount">
          <span>&#8358;450.00</span>
        </div>
      </div>
      <div className="calculate-item">
        <p>Total</p>
        <div className="amount">
          <span>&#8358;5450.00</span>
        </div>
      </div>
    </div>
  )
}

export default Calculate