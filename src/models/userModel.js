// userModel.js
import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const User = db.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
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
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  numeroutent: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  img: {
    type: DataTypes.BLOB('long')
  }
});

// Define associations
User.associate = (models) => {
  User.hasOne(models.DoctorInformation, { foreignKey: 'user_id', as: 'doctorInformation' });
};

export default User;
