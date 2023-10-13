import { FastifyInstance } from "fastify"
import { prisma } from "../libs/prisma"
import { z } from "zod"

export async function deleteClient(app: FastifyInstance) {
  app.delete("/clients", async (req) => {
    const bodySchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = bodySchema.parse(req.body)

    await prisma.clients.deleteMany({
      where: {
        id,
      },
    })
  })
}
