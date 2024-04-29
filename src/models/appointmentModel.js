import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const appointment = db.define("appointment", {
  startDate:{
    type:DataTypes.DATE
  },
  endDate:{
    type:DataTypes.DATE
  },
  observation:{
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

export default appointment;