import { fastify } from "fastify"
import { createClient } from "./routes/create-client"
import { updateClient } from "./routes/update-client"
import { deleteClient } from "./routes/delete-client"
import { getClients } from "./routes/get-clientes"
const app = fastify()
const port = 3000

app.register(createClient)
app.register(updateClient)
app.register(deleteClient)
app.register(getClients)

app
  .listen({
    port: port,
  })
  .then(() => {
    console.log(`HTTP server running on port ${port}`)
  })
