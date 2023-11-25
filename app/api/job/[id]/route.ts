import client from "@/prisma/client"
import { Job } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

type JobFindById = {
  id: string
}

export async function GET(
  request: NextRequest,
  context: { params: JobFindById }
) {
  try {
    const job: Job = await client.job.findUniqueOrThrow({
      where: {
        id: Number(context.params.id),
      },
    })
    return new Response(JSON.stringify(job), {
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
  context: { params: JobFindById }
) {
  try {
    const newJob: Job = await request.json()
    const updatedJob: Job = await client.job.update({
      where: {
        id: Number(context.params.id),
      },
      data: newJob,
    })
    return new Response(JSON.stringify(updatedJob), {
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
  context: { params: JobFindById }
) {
  try {
    const deletedJob: Job = await client.job.delete({
      where: {
        id: Number(context.params.id),
      },
    })
    return new Response(JSON.stringify(deletedJob), {
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
