const Product = async (props:Promise<{params:{productId:string}}>) => {
    const productId = (await props).params.productId
  return (
    <h1>Details about product {productId}</h1>
  )
}

export default Product