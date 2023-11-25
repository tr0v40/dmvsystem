import client from "@/prisma/client"
import { Translation } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

type TranslationFindById = {
  id: string
}

export async function GET(
  request: NextRequest,
  context: { params: TranslationFindById }
) {
  try {
    const translation: Translation = await client.translation.findUniqueOrThrow(
      {
        where: {
          id: Number(context.params.id),
        },
      }
    )
    return new Response(JSON.stringify(translation), {
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
  context: { params: TranslationFindById }
) {
  try {
    const newTranslation: Translation = await request.json()
    const updatedTranslation: Translation = await client.translation.update({
      where: {
        id: Number(context.params.id),
      },
      data: newTranslation,
    })
    return new Response(JSON.stringify(updatedTranslation), {
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
  context: { params: TranslationFindById }
) {
  try {
    const deletedTranslation: Translation = await client.translation.delete({
      where: {
        id: Number(context.params.id),
      },
    })
    return new Response(JSON.stringify(deletedTranslation), {
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
