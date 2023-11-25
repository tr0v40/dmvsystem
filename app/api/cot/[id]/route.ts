import client from "@/prisma/client"
import { Cot } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

type CotFindById = {
  id: string
}

export async function GET(
  request: NextRequest,
  context: { params: CotFindById }
) {
  try {
    const cot: Cot = await client.cot.findUniqueOrThrow({
      where: {
        id: Number(context.params.id),
      },
    })
    return new Response(JSON.stringify(cot), {
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
  context: { params: CotFindById }
) {
  try {
    const newCot: Cot = await request.json()
    const updatedCot: Cot = await client.cot.update({
      where: {
        id: Number(context.params.id),
      },
      data: newCot,
    })
    return new Response(JSON.stringify(updatedCot), {
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
