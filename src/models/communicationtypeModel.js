import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const communicationtype = db.define("communicationtype", {
  description:{
    type:DataTypes.STRING(255)
}
});


export default communicationtype;