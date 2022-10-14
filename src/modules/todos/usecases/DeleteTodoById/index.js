import { TodosRepository } from "../../repositories/TodosRepository.js";
import { DeleteTodoByIdUseCase } from "./DeleteTodoByIdUseCase.js";
import { DeleteTodoByIdController } from "./DeleteTodoByIdController.js";

const todosRepository = TodosRepository.getInstance();

const deleteTodoByIdUseCase = new DeleteTodoByIdUseCase(todosRepository);

const deleteTodoByIdController = new DeleteTodoByIdController(
  deleteTodoByIdUseCase
);

export { deleteTodoByIdController };
