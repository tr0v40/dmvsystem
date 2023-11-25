import client from "@/prisma/client"
import { Job } from "@prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const newJob: Job = await request.json()
  const CreatedJob: Job = await client.job.create({
    data: newJob,
  })

  return new Response(JSON.stringify(CreatedJob), {
    status: 201,
    statusText: "Created",
  })
}

export async function GET() {
  const jobs: Job[] = await client.job.findMany()

  return new Response(JSON.stringify(jobs), {
    status: 200,
    statusText: "OK",
  })
}
