import React from 'react'
import { notFound } from 'next/navigation';

const ReviewId = async(props:Promise<{params: {productId:string, reviewId:string}}>) => {
    const {productId, reviewId} = (await props).params;
    if(parseInt(reviewId)>1000) {
      return notFound() 
    }
  return (
    <h2>Review {reviewId} of product {productId}</h2>
  )
}

export default ReviewId