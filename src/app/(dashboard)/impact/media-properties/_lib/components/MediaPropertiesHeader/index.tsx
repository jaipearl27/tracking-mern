import React from 'react'
import "./styles.scss"
import MediaPropertiesSearch from './SearchBox'

function MediaPropertiesHeader() {
  return (
    <div className='media-props-header-wrapper'>
      <div className='media-props-header'>
        <h2>Media Properties</h2>
        <MediaPropertiesSearch />
      </div>
    </div>
  )
}

export default MediaPropertiesHeader
