// userModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";
import DoctorInformation from "./doctorinformationModel.js";

const User = db.define("user", {
  name: {
    type: DataTypes.STRING(255)
  },
  gender: {
    type: DataTypes.CHAR(1)
  },
  birthdate: {
    type: DataTypes.DATE
  },
  email: {
    type: DataTypes.STRING(255)
  },
  password: {
    type: DataTypes.STRING(255)
  },
  numeroutent: {
    type: DataTypes.INTEGER
  },
  img: {
    type: DataTypes.BLOB('long')
  },
});

// Definindo a relação de um para um
User.hasOne(DoctorInformation, {
  foreignKey: 'user_id',
  as: 'doctorInformation'
});

export default User;
