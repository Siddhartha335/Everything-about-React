import { newUsers } from "../../new-users";

export async function GET() {
    return Response.json(newUsers)
}