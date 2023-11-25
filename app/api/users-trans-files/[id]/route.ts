import client from "@/prisma/client"
import { User } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

type UserFindById = {
  id: string
}

export async function GET(
  request: NextRequest,
  context: { params: UserFindById }
) {
  try {
    const user: User = await client.user.findUniqueOrThrow({
      where: {
        id: Number(context.params.id),
      },
    })
    return new Response(JSON.stringify(user), {
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
  context: { params: UserFindById }
) {
  try {
    const newUser: User = await request.json()
    const updatedUser: User = await client.user.update({
      where: {
        id: Number(context.params.id),
      },
      data: newUser,
    })
    return new Response(JSON.stringify(updatedUser), {
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
  context: { params: UserFindById }
) {
  try {
    const deletedUser: User = await client.user.delete({
      where: {
        id: Number(context.params.id),
      },
    })
    return new Response(JSON.stringify(deletedUser), {
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
