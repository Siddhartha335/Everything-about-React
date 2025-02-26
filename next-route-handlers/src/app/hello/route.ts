export async function GET() {
    return new Response('Hello World!', {
        headers: { 'content-type': 'text/plain' },
    });
}