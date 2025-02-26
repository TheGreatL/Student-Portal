import {Model, Sequelize} from 'sequelize';
import sequelize from './config/sequelize';
import CourseModel from './models/course';
import UserModel from './models/user';

export type Models = {
  sequelize: Sequelize;
  Course: ReturnType<typeof CourseModel>;
  User: ReturnType<typeof UserModel>;
};
const database: Models = {
  sequelize,
  User: UserModel(sequelize),
  Course: CourseModel(sequelize)
};
Object.values(database).forEach((model) => {
  if (model instanceof Model && 'associate' in model) {
    model.associate(database);
  }
});

export default database;
