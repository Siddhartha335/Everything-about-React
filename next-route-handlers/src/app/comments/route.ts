import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request:NextRequest) {
   const searchParams = request.nextUrl.searchParams;
   const query =searchParams.get('lang');
   const filteredComments = query ? comments.filter(comment => comment.comment.includes(query)) : comments;
   return Response.json(filteredComments);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        comment: comment.comment
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: { 'content-type': 'application/ json' },
        status: 201
    });
}