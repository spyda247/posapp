import React from 'react'
import './PaymentMethod.css'

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <p>PaymentMethod</p>
      <ul>
        <li>
          <span role="img" aria-hidden="true">
            &#8358;
          </span>
          <p>Cash</p>
        </li>
        <li>
          <i className="fa fa-credit-card" aria-hidden="true"></i>
          <p>Card</p>
        </li>

        <li>
          <i className="fa fa-shield" aria-hidden="true"></i>
          <p>Wallet</p>
        </li>
      </ul>
      <button>Place Order</button>
    </div>
  )
}

export default PaymentMethod