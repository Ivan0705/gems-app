import axios from "axios";
import { pathToUsersBeforeAndAfterProd } from "../../consts";

export class UserService {
  static async getUsers() {
    return await axios.get(pathToUsersBeforeAndAfterProd);
  }
}
