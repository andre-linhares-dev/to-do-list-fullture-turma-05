import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { TodosRepository } from "../../repositories/TodosRepository.js";

import { AppException } from "../../../../application/errors/AppException.js";

export class FindAllByUserUseCase {
  constructor() {
    this.usersRepository = UsersRepository.getInstance();
    this.todosRepository = TodosRepository.getInstance();
  }

  execute(username) {
    // Se não exisitr usuário com este username, retornar um erro
    const user = this.usersRepository.findByUsername(username);

    if (!user) {
      throw new AppException(404, "User not found");
    }

    const todos = this.todosRepository.findAllByUsername(user.username);

    return todos;
  }
}
