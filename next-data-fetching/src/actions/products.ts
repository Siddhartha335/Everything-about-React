"use server"

import { createProduct, updateProduct,deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
    title?:string,
    description?:string,
    price?:string
}

export type FormState = {
    errors:Errors
};

export async function addProduct(prevState:FormState,formData:FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const price = formData.get('price') as string ;

    const errors:Errors = {}

    if(!title) {
        errors.title = "Title is required";
    }

    if(!description) {
        errors.description = "Description is required";
    }

    if(!price) {
        errors.price = "Price is required";
    }

    if(Object.keys(errors).length > 0) {
        return {errors};
    }

    await createProduct(title,description,parseInt(price));
    redirect('/products-db');
}

export async function editProduct(id:number,prevState:FormState,formData:FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const price = formData.get('price') as string ;

    const errors:Errors = {}

    if(!title) {
        errors.title = "Title is required";
    }

    if(!description) {
        errors.description = "Description is required";
    }

    if(!price) {
        errors.price = "Price is required";
    }

    if(Object.keys(errors).length > 0) {
        return {errors};
    }

    await updateProduct(id, title,description,parseInt(price));
    redirect('/products-db');
}

export async function removeProduct(id:number) {
    await deleteProduct(id);
    revalidatePath('/products-db');
}