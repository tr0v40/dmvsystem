import client from "@/prisma/client"
import { TranslationFile } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

type TranslationFileFindById = {
  id: string
}

export async function GET(
  request: NextRequest,
  context: { params: TranslationFileFindById }
) {
  try {
    const translationFile: TranslationFile =
      await client.translationFile.findUniqueOrThrow({
        where: {
          id: Number(context.params.id),
        },
      })
    return new Response(JSON.stringify(translationFile), {
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
  context: { params: TranslationFileFindById }
) {
  try {
    const newTranslationFile: TranslationFile = await request.json()
    const updatedTranslationFile: TranslationFile =
      await client.translationFile.update({
        where: {
          id: Number(context.params.id),
        },
        data: newTranslationFile,
      })
    return new Response(JSON.stringify(updatedTranslationFile), {
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

export async function DELETE(
  request: NextRequest,
  context: { params: TranslationFileFindById }
) {
  try {
    const deletedTranslationFile: TranslationFile =
      await client.translationFile.delete({
        where: {
          id: Number(context.params.id),
        },
      })
    return new Response(JSON.stringify(deletedTranslationFile), {
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
