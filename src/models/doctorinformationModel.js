import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";
import Speciality from "./specialityModel.js";

const DoctorInformation = db.define("doctorInformation", {
  additionalInformation: {
    type: DataTypes.STRING(255)
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  speciality_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Speciality,
      key: 'id'
    }
  }
});

// Definindo a relação com Speciality
DoctorInformation.belongsTo(Speciality, { foreignKey: 'speciality_id', as: 'speciality' });

export default DoctorInformation;

