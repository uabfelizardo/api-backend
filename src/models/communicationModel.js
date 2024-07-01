import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const communication = db.define("communication", {
  startDate:{
    type:DataTypes.DATE
  },
  endDate:{
    type:DataTypes.DATE
  },
  text:{
    type:DataTypes.STRING(255)
  },
  user_id:{
    type:DataTypes.INTEGER,
    references:{ model:'users',key:'id'},
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    allowNull:false
  },
  communication_type_id:{
    type:DataTypes.INTEGER,
    references:{ model:'communicationtypes',key:'id'},
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    allowNull:false
  }
});


export default communication;