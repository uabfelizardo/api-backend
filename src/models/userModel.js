import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const user =  db.define("user", {
  name:{
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
user_type_id:{
  type:DataTypes.INTEGER,
  references:{ model:'usertypes',key:'id'},
  allowNull:false
}
});
 
export default user;

