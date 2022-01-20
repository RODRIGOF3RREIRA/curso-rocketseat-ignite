import express, { request, response } from "express";

const app = express();
/**
 * GET      => Buscar uma informação
 * POST     => Inserir uma informação
 * PUT      => Alterar uma informação
 * DELETE   => Remover um dado
 * PATCH    =>  Alterar uma informação específica
 */
app.get("/test", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("nlw");
});

app.post("/test-post", (request, response) => {
  return response.send("metodo post");
});

app.listen(3000, () => console.log("Server is run"));
