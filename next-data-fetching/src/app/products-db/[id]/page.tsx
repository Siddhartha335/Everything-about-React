import { notFound } from 'next/navigation';
import EditProductsForm from './product-edit-form';
import { getProduct } from '@/prisma-db';

export type Product = {
    id:number,
    title:string,
    price:number,
    description:string | null
} | null
 
const EditProducts = async({params}:{params:Promise<{id:string}>}) => {

    const {id} = await params;

    const product:Product = await getProduct(parseInt(id));

    if(!product) {
        notFound();
    }

  return (
    <EditProductsForm product={product} />
  )
}

export default EditProducts