import { FastifyInstance } from "fastify"
import { prisma } from "../libs/prisma"

export async function getClients(app: FastifyInstance) {
  app.get("/clients", async (req) => {
    const clients = await prisma.clients.findMany({})
    return clients
  })
}
