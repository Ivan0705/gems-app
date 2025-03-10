import axios from "axios";
import { pathToUsersBeforeAndAfterProd } from "../../consts";

export class UserService {
  static async getUsers(controller: AbortController) {
    return axios.get(pathToUsersBeforeAndAfterProd, {
      signal: controller.signal,
    });
  }
}
