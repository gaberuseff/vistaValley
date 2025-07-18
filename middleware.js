import { NextResponse } from "next/server";
import { auth } from "@/app/_lib/auth";

// export async function middleware(request) {
//     console.log(request);

//     const session = await auth();

//     return NextResponse.redirect(new URL('/about', request.url));
// }

export const middleware = auth;

export const config = {
    matcher: [
        '/account',
    ]
};