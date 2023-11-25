import client from "@/prisma/client"
import { TranslationFile } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const newTranslationFile: TranslationFile = await request.json()
  const CreatedTranslationFile: TranslationFile =
    await client.translationFile.create({
      data: newTranslationFile,
    })

  return new Response(JSON.stringify(CreatedTranslationFile), {
    status: 201,
    statusText: "Created",
  })
}

export async function GET() {
  const translationFiles: TranslationFile[] =
    await client.translationFile.findMany()

  return new Response(JSON.stringify(translationFiles), {
    status: 200,
    statusText: "OK",
  })
}
