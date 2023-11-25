import client from "@/prisma/client"
import { UserOnTranslationsFiles } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const newUserOnTranslationsFiles: UserOnTranslationsFiles =
    await request.json()
  const CreatedUserOnTranslationsFiles: UserOnTranslationsFiles =
    await client.userOnTranslationsFiles.create({
      data: newUserOnTranslationsFiles,
    })

  return new Response(JSON.stringify(CreatedUserOnTranslationsFiles), {
    status: 201,
    statusText: "Created",
  })
}

export async function GET() {
  const userOnTranslationsFiles: UserOnTranslationsFiles[] =
    await client.userOnTranslationsFiles.findMany()

  return new Response(JSON.stringify(userOnTranslationsFiles), {
    status: 200,
    statusText: "OK",
  })
}
