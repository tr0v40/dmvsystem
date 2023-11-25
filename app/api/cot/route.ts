import client from "@/prisma/client"
import { Cot } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const newCot: Cot = await request.json()
  const CreatedCot: Cot = await client.cot.create({
    data: newCot,
  })

  return new Response(JSON.stringify(CreatedCot), {
    status: 201,
    statusText: "Created",
  })
}

export async function GET() {
  const cots: Cot[] = await client.cot.findMany()

  return new Response(JSON.stringify(cots), {
    status: 200,
    statusText: "OK",
  })
}
