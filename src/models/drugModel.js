import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const drug = db.define("drug", {
  name:{
    type:DataTypes.STRING(255)
  },
  validity:{
    type:DataTypes.DATE
  } ,
  laboratory:{
    type:DataTypes.STRING(255)
  }
});

export default drug;