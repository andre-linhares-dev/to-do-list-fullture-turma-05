import Router from "express";

import usersRouters from "../routes/UsersRoutes.js";
import todosRoutes from "../routes/TodosRoutes.js";

const routes = Router();

// Métodos HTTP
// GET - Buscar/listar informações do nosso servidor
// POST - Publicar informações
// PUT - Atualização das informações
// PATCH - Atualização parcial das informações
// DELETE - Deleção da informação

routes.use("/users", usersRouters);
routes.use("/todos", todosRoutes);

export default routes;
