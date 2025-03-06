import { createProduct } from "@/prisma-db";

export async function POST(request: Request) {
    const body = await request.json();
    const {title, description, price} = body;
    const product = await createProduct(title,description,parseInt(price));
    return new Response(JSON.stringify(product),{
        headers:{
            "Content-Type": "application/json"
        }
    });
}