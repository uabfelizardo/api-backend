// Importe Sequelize e o objeto de conexão com o banco de dados
import { Sequelize, DataTypes } from 'sequelize';
import db from '../db.js';

// Defina o modelo de disponibilidade do médico
const availability = db.define('availability', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  doctor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' }, // Substitua 'doctors' pelo nome da tabela de médicos no seu banco de dados
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  monday: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  tuesday: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  wednesday: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  thursday: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  friday: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  saturday: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  sunday: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

export default availability;
