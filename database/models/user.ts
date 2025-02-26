'use strict';
import {DataTypes, Sequelize, Optional} from 'sequelize';
import {Table, Model} from 'sequelize-typescript';

export type UserRoles = {
  role: 'student' | 'employee' | 'admin';
};

export type UserType = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRoles;
};

interface UserAttributes {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'student' | 'employee' | 'admin';
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

const UserModel = (sequelize: Sequelize) => {
  @Table({
    timestamps: true,
    modelName: 'Users'
  })
  class User extends Model<UserAttributes, UserCreationAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM,
        values: ['student', 'employee', 'admin']
      }
    },
    {
      sequelize
    }
  );
  return User;
};

export default UserModel;

