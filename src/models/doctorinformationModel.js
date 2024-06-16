// doctorinformationModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const DoctorInformation = db.define("DoctorInformation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  additionalInformation: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

DoctorInformation.associate = (models) => {
  DoctorInformation.hasMany(models.DoctorSpecialties, { foreignKey: 'user_id', as: 'specialties' });
  DoctorInformation.belongsTo(models.User, { foreignKey: 'user_id', as: 'doctorInformation' });
};

export default DoctorInformation;
