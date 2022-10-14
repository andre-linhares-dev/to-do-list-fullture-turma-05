import { DeleteTodoByIdUseCase } from "./DeleteTodoByIdUseCase.js";

export class DeleteTodoByIdController {
  constructor() {
    this.deleteTodoByIdUseCase = new DeleteTodoByIdUseCase();
  }

  handle(request, response) {
    const { id } = request.params;

    this.deleteTodoByIdUseCase.execute(id);

    return response.status(204).send();
  }
}
