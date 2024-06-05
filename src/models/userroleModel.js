import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";


const userrole = db.define("userrole", {
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
  role_id:{
    type:DataTypes.INTEGER,
    references:{ model:'roles',key:'id'},
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    allowNull:false
  }
});

export default userrole;