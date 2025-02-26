export async function GET() {
    return new Response("Dashboard data", {
        headers: { 'content-type': 'text/plain' },
    });
}