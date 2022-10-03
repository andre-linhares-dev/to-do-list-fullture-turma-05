import Router from "express";

const routes = Router();

// Métodos HTTP
// GET - Buscar/listar informações do nosso servidor
// POST - Publicar informações
// PUT - Atualização das informações
// PATCH - Atualização parcial das informações
// DELETE - Deleção da informação

routes.get("/", (request, response) => {
  response.status(200).json({
    message: "Hello World",
  });
});

export default routes;
