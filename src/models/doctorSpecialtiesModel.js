// doctorSpecialtiesModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const DoctorSpecialties = db.define("DoctorSpecialties", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  specialty_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

DoctorSpecialties.associate = (models) => {
  DoctorSpecialties.belongsTo(models.Speciality, { foreignKey: 'specialty_id', as: 'specialty' });
  DoctorSpecialties.belongsTo(models.DoctorInformation, { foreignKey: 'user_id', as: 'doctor' });
};

export default DoctorSpecialties;
