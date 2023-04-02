import React from 'react'
import PaymentMethod from '../PaymentMethod/PaymentMethod'
import Table from '../Table/Table'
import './Details.css'

const Details = () => {
  return (
    <div className='details'>
        <Table />
        <PaymentMethod />
    </div>
  )
}

export default Details