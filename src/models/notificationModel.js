import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const notification = db.define("notification", {
  defaulttext:{
    type:DataTypes.STRING(255)
  },
  user_id:{
    type:DataTypes.INTEGER,
    references:{ model:'users',key:'id'},
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    allowNull:false
  }
});

export default notification;