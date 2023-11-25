import client from "@/prisma/client"
import { FilesOnJobs } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

type FilesOnJobsFindById = {
  id: string
}

export async function GET(
  request: NextRequest,
  context: { params: FilesOnJobsFindById }
) {
  try {
    const filesOnJobs: FilesOnJobs = await client.filesOnJobs.findUniqueOrThrow(
      {
        where: {
          id: Number(context.params.id),
        },
      }
    )
    return new Response(JSON.stringify(filesOnJobs), {
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
  context: { params: FilesOnJobsFindById }
) {
  try {
    const newFilesOnJobs: FilesOnJobs = await request.json()
    const updatedFilesOnJobs: FilesOnJobs = await client.filesOnJobs.update({
      where: {
        id: Number(context.params.id),
      },
      data: newFilesOnJobs,
    })
    return new Response(JSON.stringify(updatedFilesOnJobs), {
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
