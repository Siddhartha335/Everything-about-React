// import { NextRequest } from "next/server";
import {cookies } from "next/headers";

export async function GET() {

    // const headers = new Headers(request.headers);

    // const token = headers.get('Authorization');

    const cookieStore = await cookies();
    cookieStore.set("results_per_page","20");
    console.log(cookieStore.get("results_per_page"));

    // const headersList = await headers();
    // console.log(headersList.get('Authorization'));

    return new Response('<h1>Profile API data</h1>', {
        headers: { 'content-type': 'text/plain',
        'set-cookie': 'theme=dark'
         },
        
    });
}