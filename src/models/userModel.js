// userModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

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
    type: DataTypes.CHAR(1),
    allowNull: false
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false
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

// Define associations
// User.associate = (models) => {
//   User.hasOne(models.DoctorInformation, { foreignKey: 'user_id', as: 'doctorInformation' });
// };

export default User;
