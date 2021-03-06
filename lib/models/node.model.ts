import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { database } from '../config/database';

import { Link } from './link.model';

export interface NodeInterface {
  name: string;
}

export class Node extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Node.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
    }
  },
  {
    tableName: 'nodes',
    sequelize: database
  },
);

Node.hasMany(Link, {
  sourceKey: 'id',
  foreignKey: 'fromId',
  as: 'previousLinks'
});

Node.hasMany(Link, {
  sourceKey: 'id',
  foreignKey: 'toId',
  as: 'nextLinks'
});

Node.sync({ force: true }).then(() => console.log('node table created!'));
