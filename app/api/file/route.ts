import client from "@/prisma/client"
import { File } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const newFile: File = await request.json()
  const CreatedFile: File = await client.file.create({
    data: newFile,
  })

  return new Response(JSON.stringify(CreatedFile), {
    status: 201,
    statusText: "Created",
  })
}

export async function GET() {
  const files: File[] = await client.file.findMany()

  return new Response(JSON.stringify(files), {
    status: 200,
    statusText: "OK",
  })
}
