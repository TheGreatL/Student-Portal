'use strict';
import {Model, DataTypes, Sequelize} from 'sequelize';
import {Models} from '..';

const CourseModel = (sequelize: Sequelize) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: Models) {}
  }
  course.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Courses'
    }
  );
  return course;
};
export default CourseModel;

