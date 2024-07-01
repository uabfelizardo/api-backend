import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const document =  db.define("document", {
  document:{
    type:DataTypes.STRING(255)
  },
  date:{
      type:DataTypes.DATE
  },
  appointment_id:{
    type:DataTypes.INTEGER,
    references:{ model:'appointments',key:'id'},
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    allowNull:false
  }
});
 
export default document;

