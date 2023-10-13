import { FastifyInstance } from "fastify"
import { prisma } from "../libs/prisma"
import { z } from "zod"

export async function createClient(app: FastifyInstance) {
  app.post("/clients", async (req) => {
    const bodySchema = z.object({
      name: z.string(),
      lastName: z.string(),
    })

    const { name, lastName } = bodySchema.parse(req.body)

    const client = await prisma.clients.create({
      data: {
        name,
        lastName,
      },
    })

    return client
  })
}
