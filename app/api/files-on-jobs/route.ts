import client from "@/prisma/client"
import { FilesOnJobs } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const newFilesOnJobs: FilesOnJobs = await request.json()
  const CreatedFilesOnJobs: FilesOnJobs = await client.filesOnJobs.create({
    data: newFilesOnJobs,
  })

  return new Response(JSON.stringify(CreatedFilesOnJobs), {
    status: 201,
    statusText: "Created",
  })
}

export async function GET() {
  const filesOnJobs: FilesOnJobs[] = await client.filesOnJobs.findMany()

  return new Response(JSON.stringify(filesOnJobs), {
    status: 200,
    statusText: "OK",
  })
}
