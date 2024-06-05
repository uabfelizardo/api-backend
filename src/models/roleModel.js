import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const role = db.define("role", {
  description:{
    type:DataTypes.STRING(255)
}
});

export default role;