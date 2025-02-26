import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
    // return NextResponse.redirect(new URL('/',request.url))

//     if(request.nextUrl.pathname === '/profile'){
//         return NextResponse.rewrite(new URL('/hello',
//         request.nextUrl))
// }
    const response = NextResponse.next();

    const themePreferences = request.cookies.get('theme');

    if(!themePreferences) {
        response.cookies.set("theme",'dark')
    }

    response.headers.set("x-name","Sid");

    return response;

}

// export const config = {
//     matcher: "/profile"
// }  