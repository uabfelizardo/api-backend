import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const doctorspeciality = db.define("doctorspeciality", {
  date:{
    type:DataTypes.DATE
  },
  user_id:{
    type:DataTypes.INTEGER,
    references:{ model:'users',key:'id'},
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    allowNull:false
  },
  speciality_id:{
    type:DataTypes.INTEGER,
    references:{ model:'specialities',key:'id'},
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    allowNull:false
  }
});

export default doctorspeciality;