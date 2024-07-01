import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const appointmentnote = db.define("appointmentnote", {
  note:{
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

export default appointmentnote;