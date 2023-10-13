import { FastifyInstance } from "fastify"
import { prisma } from "../libs/prisma"
import { z } from "zod"

export async function updateClient(app: FastifyInstance) {
  app.patch("/clients", async (req) => {
    const bodySchema = z.object({
      id: z.string().uuid(),
      name: z.string().optional(),
      lastName: z.string().optional(),
    })

    const { id, name, lastName } = bodySchema.parse(req.body)

    const clientUpdated = await prisma.clients.update({
      where: {
        id,
      },
      data: {
        name,
        lastName,
      },
    })

    return clientUpdated
  })
}
