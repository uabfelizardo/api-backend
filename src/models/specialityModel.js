import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const speciality = db.define("speciality", {
  description:{
    type:DataTypes.STRING(255)
}
});

export default speciality;