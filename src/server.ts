import express from "express"

const app = express()

app.get("/test", (request, response) => {
  return response.send("Olá Mundo NLW")
})

app.post("/test-post", (request, responde) => {
  return responde.send("Olá POST NLW")
})

app.listen(3000, ()=> console.log("Server is Running"))