import client from "@/prisma/client"
import { Customer } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const newCustomer: Customer = await request.json()
  const Createdcustomer: Customer = await client.customer.create({
    data: newCustomer,
  })

  return new Response(JSON.stringify(Createdcustomer), {
    status: 201,
    statusText: "Created",
  })
}

export async function GET(request: NextRequest) {
  const customer: Customer[] = await client.customer.findMany()

  return new Response(JSON.stringify(customer), {
    status: 200,
    statusText: "OK",
  })
}
