import { FindAllByUserUseCase } from "./FindAllByUserUseCase.js";

export class FindAllByUserController {
  constructor() {
    this.findAllByUserUseCase = new FindAllByUserUseCase();
  }

  handle(request, response) {
    const { username } = request.params;

    const todos = this.findAllByUserUseCase.execute(username);

    return response.json(todos);
  }
}
