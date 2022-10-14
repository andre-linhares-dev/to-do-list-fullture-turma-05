import { v4 as uuidV4 } from "uuid";

export class Todo {
  id;
  description;
  username;
  done;
  deadline;
  created_at;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
