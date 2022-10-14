import Router from "express";

import { createTodoController } from "../modules/todos/usecases/CreateTodo/index.js";
import { findAllByUserController } from "../modules/todos/usecases/FindAllByUser/index.js";
import { deleteTodoByIdController } from "../modules/todos/usecases/DeleteTodoById/index.js";

const todosRoutes = Router();

todosRoutes.post("/", (request, response) => {
  return createTodoController.handle(request, response);
});

todosRoutes.get("/:username", (request, response) => {
  return findAllByUserController.handle(request, response);
});

todosRoutes.delete("/:id", (request, response) => {
  return deleteTodoByIdController.handle(request, response);
});

export default todosRoutes;
