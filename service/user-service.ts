import database from '@/database';
import { UserType } from '@/database/models/user';

export class UserService {
  static async createUser(user: UserType) {
    const result = database.User.create(user);
    return result;
  }
}
