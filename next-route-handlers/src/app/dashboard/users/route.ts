export async function GET() {
    return new Response("Users data", {
        headers: { 'content-type': 'text/plain' },
    });
}