// import { Sequelize } from "sequelize";
// import dotenv from "dotenv/config.js";

// const dbName = process.env.DB_NAME;
// const dbUser = process.env.DB_USER;
// const dbHost = process.env.DB_HOST;
// const dbPassword = process.env.DB_PASSWORD;

// const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
//   dialect: "mysql",
//   host: dbHost,
//   logging: false, // Desativar logs do Sequelize, se desejar
//   define: {
//     timestamps: true, // Adicionar timestamps automaticamente às tabelas
//   },
//   // Opção para atualizar automaticamente o esquema do banco de dados
//   alter: {
//     drop: false, // Não descartar tabelas existentes se houver mudanças
//   },
//   // Forçar a criação do banco de dados se não existir
//   // database: 'onlinedoctordb',
//   // force: true,
// });

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to establish connection with the database:', error);
//   });

// // Adicione aqui os modelos e as associações entre eles, se necessário

// export default sequelize;

import { Sequelize } from "sequelize"; // importar o sequelize
import dotenv from "dotenv/config.js"; // importar o dotenv para localizar as variáveis de ambiente

// passar os dados do .env para as constantes
const dbName = process.env.DB_NAME; 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //passar os dados para o sequelize
  dialect: "mysql", //informar o tipo de banco que vamos utilizar
  host: dbHost, //o host, neste caso estamos com um banco local
});

sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch((error) => {
  console.error('Unable to establish connection with the database:', error);
});

// Fazer o relacionamentos


// Import models
DoctorInformation.init(sequelize);
DoctorSpecialties.init(sequelize);
Speciality.init(sequelize);
User.init(sequelize);

// Call associate methods after all models are defined
DoctorInformation.associate({ DoctorSpecialties, User });
DoctorSpecialties.associate({ DoctorInformation, Speciality });
Speciality.associate({ DoctorSpecialties });
User.associate({ DoctorInformation });

// Sync database (this should be in your app setup)
sequelize.sync();

export default sequelize; //exportar
