import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const appointment = db.define("appointment", {
  date: {
    type: DataTypes.DATE
  },
  time: {
    type: DataTypes.TIME
  },
  observation: {
    type: DataTypes.STRING(255)
  },
  patient_id: {
    type: DataTypes.INTEGER,
    references: { model: 'users', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    allowNull: false
  },
  doctor_id: {
    type: DataTypes.INTEGER,
    references: { model: 'users', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    allowNull: false
  },
  state: {
    type: DataTypes.STRING(255),
    defaultValue: 'pending',
    allowNull: false
  }
});

export default appointment;
