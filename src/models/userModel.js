import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const user =  db.define("user", {
  name:{
    type:DataTypes.STRING(255)
},
title:{
    type:DataTypes.STRING(255)
},
gender:{
    type:DataTypes.CHAR(1)
},
birthdate:{
    type:DataTypes.DATE
},
email:{
    type:DataTypes.STRING(255)
},
password:{
    type:DataTypes.STRING(255)
},
numeroutent:{
  type:DataTypes.INTEGER
},
img:{
    type: DataTypes.BLOB('long')
},
});
 
export default user;

