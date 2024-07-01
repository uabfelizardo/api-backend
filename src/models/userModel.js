// userModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";
import DoctorInformation from "./doctorinformationModel.js";

const User = db.define("user", {
  prefix:{
    type:DataTypes.CHAR(4),
  },
  firstName:{
    type: DataTypes.STRING(255),
    unique: true
  },
  lastName:{
    type: DataTypes.STRING(255),
  },
  username: {
    type: DataTypes.STRING(255),
    unique: true
  },
  gender: {
    type: DataTypes.CHAR(1)
  },
  birthdate: {
    type: DataTypes.DATE
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true
  },
  contact:{
    type: DataTypes.STRING(255),
  },
  address: {
    type: DataTypes.STRING(255),
  },

  password: {
    type: DataTypes.STRING(255),
    unique: true
  },
  img: {
    type: DataTypes.BLOB('long')
  },
  role:{
    type:DataTypes.STRING(50),
  },
  speciality:{
    type:DataTypes.STRING(255),
  },
  state:{
    type:DataTypes.STRING(20),
  }
});

// Definindo a relação de um para um
User.hasOne(DoctorInformation, {
  foreignKey: 'user_id',
  as: 'doctorInformation'
});

export default User;
