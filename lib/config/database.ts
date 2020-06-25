import { Sequelize } from 'sequelize';

export const database = new Sequelize({
  database: 'database',
  dialect: 'sqlite',
  storage: ':memory:'
});
