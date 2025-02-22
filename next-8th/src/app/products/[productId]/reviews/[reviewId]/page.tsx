import React from 'react'
import { notFound,redirect } from 'next/navigation';

function generateRandomNumber(num:number) {
  return Math.floor(Math.random() * num);
}

const ReviewId = async(props:Promise<{params: {productId:string, reviewId:string}}>) => {
    const {productId, reviewId} = (await props).params;

    const random = generateRandomNumber(2)
    // if(random === 0) {
    //   throw new Error("Error in review page")
    // }

    if(parseInt(reviewId)>1000) {
      // return notFound() 
      redirect("/products")
    }
  return (
    <h2>Review {reviewId} of product {productId}</h2>
  )
}

export default ReviewId