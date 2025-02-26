import sequelize from './config/sequelize';

const syncModels = async () => {
  try {
    // This will sync the models with the database
    await sequelize.authenticate();
    console.log('Successfully connected to the database');
    await sequelize.sync({force: false});

    console.log('Database synchronized!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

export default syncModels;
