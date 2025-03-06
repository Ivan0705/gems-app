import axios from "axios";
import { pathToUsersBeforeAndAfterProd } from "../../consts";

export class UserService {
  static async getUsers(controller: any) {
    return await axios.get(pathToUsersBeforeAndAfterProd, {
      signal: controller.signal,
    });
  }
}
