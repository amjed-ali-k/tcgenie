import { type NextRequest } from "next/server"
import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query")

    if (!query || query.replaceAll(" ", "") === "") {
      return new Response("Bad Request", { status: 400 })
    }

    if (query.length < 3) {
      return new Response("Bad Request", { status: 400 })
    }

    const session = await getServerSession(authOptions)
    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }
    const { user } = session
    const _query = query
    const posts = await db.student.findMany({
      where: {
        OR: [
          {
            admissionNo: {
              contains: _query,
            },
          },
          {
            name: {
              contains: _query,
            },
          },
          {
            parentName: {
              contains: _query,
            },
          },
          {
            phoneNo: {
              contains: _query,
            },
          },
          {
            parentAddress: {
              contains: _query,
            },
          },
        ],
        AND: [
          {
            createdById: user.id,
          },
        ],
      },
      take: 10,
    })

    return new Response(JSON.stringify(posts), {
      headers: {
        "content-type": "application/json",
      },
    })
  } catch (error) {
    console.log(error)
    return new Response(null, { status: 500 })
  }
}
