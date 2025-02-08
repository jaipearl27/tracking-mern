import React from 'react'
import "./styles.scss"
import PromotionsSearch from './PromotionsSearch'

function PromotionsHeader() {
  return (
    <div className='promotions-header-wrapper'>
      <div className='promotions-header'>
        <h2>Promotions</h2>
        <PromotionsSearch />
      </div>
    </div>
  )
}

export default PromotionsHeader
