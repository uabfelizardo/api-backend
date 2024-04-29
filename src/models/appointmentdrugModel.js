import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const appointmentdrug = db.define("appointmentdrug", {
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
  drug_id:{
    type:DataTypes.INTEGER,
    references:{ model:'drugs',key:'id'},
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    allowNull:false
  }
});

export default appointmentdrug;