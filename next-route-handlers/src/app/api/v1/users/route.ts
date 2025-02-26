import { users } from "../../users"
import {redirect} from "next/navigation"

export async function GET() {
    redirect('/api/v2/users')
    return Response.json(users)
}