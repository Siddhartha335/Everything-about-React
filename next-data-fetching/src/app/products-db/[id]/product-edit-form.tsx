"use client"

import React, { useActionState } from 'react'
import { FormState,editProduct } from '@/actions/products';
import { Product } from './page';
import { notFound } from 'next/navigation';

const EditProductsForm = ({product}:{product:Product}) => {

    const initialState:FormState = {
        errors:{}
    }   

    if (product?.id === undefined) {
        notFound();
    }
    const editProductWithId = editProduct.bind(null, product.id);

    const [state,formAction,isPending] = useActionState(editProductWithId,initialState);

  return (
    <div className="w-1/2 bg-white text-black p-6 mx-auto my-6 rounded-2xl">
            <form action={formAction}>
                <div className="w-[100%] flex flex-row mb-8">
                    <div className="w-1/3 p-2">
                        <label>Title</label>
                    </div>
                    {state.errors.title && <p className='text-red-500'>{state.errors.title}</p>}
                    <input
                        type="text"
                        name='title'
                        placeholder="Title"
                        defaultValue={product?.title}
                        className="w-2/3 bg-slate-900 text-gray-100 p-2"
                    />
                </div>
                <div className="w-[100%] flex flex-row mb-8">
                    <div className="w-1/3 p-2">
                        <label>Description</label>
                    </div>
                    {state.errors.description && <p className='text-red-500'>{state.errors.description}</p>}
                    <textarea
                        cols={30}
                        rows={5}
                        name='description'
                        placeholder="Description"
                        className="w-2/3 bg-slate-900 text-gray-100 p-2"
                        defaultValue={product?.description ?? ""}
                    />
                </div>
                <div className="w-[100%] flex flex-row mb-8">
                    <div className="w-1/3 p-2">
                        <label>Price</label>
                    </div>
                    {state.errors.price && <p className='text-red-500'>{state.errors.price}</p>}
                    <input
                        type="text"
                        name='price'
                        placeholder="Price"
                        className="w-2/3 bg-slate-900 text-gray-100 p-2"
                        defaultValue={product?.price}
                    />
                </div>
                {/* <Button />  use of useFormStatus hook in here */}
                <button
                type="submit"
                className="bg-amber-600 rounded-sm p-2 w-full hover:cursor-pointer disabled:bg-gray-600" disabled={isPending}
                >
                Submit
                </button>
            </form>
        </div>
  )
}

export default EditProductsForm