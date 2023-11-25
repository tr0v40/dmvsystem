import client from "@/prisma/client"
import { Translation } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const newTranslation: Translation = await request.json()
  const CreatedTranslation: Translation = await client.translation.create({
    data: newTranslation,
  })

  return new Response(JSON.stringify(CreatedTranslation), {
    status: 201,
    statusText: "Created",
  })
}

export async function GET() {
  const translations: Translation[] = await client.translation.findMany()

  return new Response(JSON.stringify(translations), {
    status: 200,
    statusText: "OK",
  })
}
