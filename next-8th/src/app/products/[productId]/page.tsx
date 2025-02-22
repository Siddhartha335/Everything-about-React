import { Metadata } from "next"

type Props = {
  params:Promise<{productId:string}>
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
  const productId = (await params).productId
  const title = await new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(`Iphone ${productId}`)
    },1000)
  })
  return {
    title: `Product ${title}`
  }
}

const Product = async ({params}:Props) => {
    const productId = (await params).productId
  return (
    <h1>Details about product {productId}</h1>
  )
}

export default Product