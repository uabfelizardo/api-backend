// doctorReviews.js
import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const DoctorReviews = db.define("DoctorReviews", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  doctorInformation_userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  review_text: {
    type: DataTypes.TEXT
  },
  review_date: {
    type: DataTypes.DATE
  },
  review_rating: {
    type: DataTypes.INTEGER,
    min: 1,
    max: 5
  }
});

DoctorReviews.associate = (models) => {
    DoctorReviews.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    DoctorReviews.belongsTo(models.DoctorInformation, { foreignKey: 'doctorInformation_userId', as: 'doctor' });
};

export default DoctorReviews;
