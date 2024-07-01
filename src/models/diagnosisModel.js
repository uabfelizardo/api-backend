import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const diagnosis =  db.define("diagnosi", {
  diagnosis:{
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
  },
  user_id:{
    type:DataTypes.INTEGER,
    references:{ model:'users',key:'id'},
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    allowNull:false
  }
});
 
export default diagnosis;

