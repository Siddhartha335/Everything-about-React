import { comments } from "../data";

type Params = {
    params: Promise<{ id: string }>;
}

export async function GET(_request:Request, { params }: Params) {
    const {id}  = await params;
    const comment = comments.find((comment)=> comment.id === parseInt(id));

   if(comment === undefined){
       return new Response("Comment not found", {status: 404});
   }
   return Response.json(comment);
}


export async function PATCH(request:Request, {params}: Params) {

    const {id} = await params;
    const comment = comments.find((comment)=> comment.id === parseInt(id));

    if(comment === undefined){
        return new Response("Comment not found", {status: 404});
    }

    const body = await request.json();
    comment.comment = body.comment;

    return new Response(JSON.stringify(comment), {status: 200});
}


export async function DELETE(_request:Request, {params}: Params) {
    const {id} = await params;
    const commentIndex = comments.findIndex((comment)=> comment.id === parseInt(id));

    if(commentIndex === -1){
        return new Response("Comment not found", {status: 404});
    }

    comments.splice(commentIndex, 1);

    return new Response("Comment deleted", {status: 200});
}