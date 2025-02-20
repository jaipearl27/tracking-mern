import React from 'react'
import PromotionListing from './_lib/components/PromotionListing'
import PromotionsHeader from './_lib/components/PromotionHeader'

function PromotionsPage() {
  return (
    <div>
      <PromotionsHeader />
      <PromotionListing />
    </div>
  )
}

export default PromotionsPage
