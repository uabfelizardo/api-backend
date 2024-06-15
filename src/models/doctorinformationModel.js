// doctorinformationModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const DoctorInformation = db.define("doctorinformation", {
  additionalInformation: {
    type: DataTypes.STRING(255)
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default DoctorInformation;
