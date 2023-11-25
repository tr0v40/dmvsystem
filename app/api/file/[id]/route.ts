import client from "@/prisma/client"
import { File } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

type FileFindById = {
  id: string
}

export async function GET(
  request: NextRequest,
  context: { params: FileFindById }
) {
  try {
    const file: File = await client.file.findUniqueOrThrow({
      where: {
        id: Number(context.params.id),
      },
    })
    return new Response(JSON.stringify(file), {
      status: 200,
      statusText: "OK",
    })
  } catch (error) {
    const msgError = error as PrismaClientKnownRequestError
    return new NextResponse(JSON.stringify(msgError), {
      status: 400,
      statusText: "Bad Request",
    })
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: FileFindById }
) {
  try {
    const newFile: File = await request.json()
    const updatedFile: File = await client.file.update({
      where: {
        id: Number(context.params.id),
      },
      data: newFile,
    })
    return new Response(JSON.stringify(updatedFile), {
      status: 200,
      statusText: "OK",
    })
  } catch (error) {
    const msgError = error as PrismaClientKnownRequestError
    return new NextResponse(JSON.stringify(msgError), {
      status: 400,
      statusText: "Bad Request",
    })
  }
}
