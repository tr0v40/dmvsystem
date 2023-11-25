import client from "@/prisma/client"
import { Customer } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

type CustomerFindById = {
  id: string
}

export async function GET(
  request: NextRequest,
  context: { params: CustomerFindById }
) {
  try {
    const customer: Customer = await client.customer.findUniqueOrThrow({
      where: {
        id: Number(context.params.id),
      },
    })
    return new Response(JSON.stringify(customer), {
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
  context: { params: CustomerFindById }
) {
  try {
    const newCustomer: Customer = await request.json()
    const updatedCustomer: Customer = await client.customer.update({
      where: {
        id: Number(context.params.id),
      },
      data: newCustomer,
    })
    return new Response(JSON.stringify(updatedCustomer), {
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
  context: { params: CustomerFindById }
) {
  try {
    await client.customer.delete({
      where: {
        id: Number(context.params.id),
      },
    })
    return new Response(null, {
      status: 204,
      statusText: "No Content",
    })
  } catch (error) {
    const msgError = error as PrismaClientKnownRequestError
    return new NextResponse(JSON.stringify(msgError), {
      status: 400,
      statusText: "Bad Request",
    })
  }
}
