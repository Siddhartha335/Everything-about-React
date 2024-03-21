import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='d-flex justify-content-center my-4' style={{color:"#f85606"}}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default LoadingSpinner