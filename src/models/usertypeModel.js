import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const usertype = db.define("usertype", {
  description:{
    type:DataTypes.STRING(255)
}
});

export default usertype;