// specialityModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const Speciality = db.define("Speciality", {
  specialty_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
});

// Define associations
Speciality.associate = (models) => {
  Speciality.hasMany(models.DoctorSpecialties, { foreignKey: 'specialty_id', as: 'doctorSpecialties' });
};

export default Speciality;