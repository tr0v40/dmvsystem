import client from "@/prisma/client"
import { User } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const newUser: User = await request.json()
  const Createduser: User = await client.user.create({
    data: newUser,
  })

  return new Response(JSON.stringify(Createduser), {
    status: 201,
    statusText: "Created",
  })
}

export async function GET() {
  const users: User[] = await client.user.findMany()

  return new Response(JSON.stringify(users), {
    status: 200,
    statusText: "OK",
  })
}
