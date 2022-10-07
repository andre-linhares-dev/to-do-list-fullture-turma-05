import Router from "express";

import usersRouters from "../routes/UsersRoutes.js";

const routes = Router();

// Métodos HTTP
// GET - Buscar/listar informações do nosso servidor
// POST - Publicar informações
// PUT - Atualização das informações
// PATCH - Atualização parcial das informações
// DELETE - Deleção da informação

routes.use(usersRouters);

export default routes;
