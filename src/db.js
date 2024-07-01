import { Sequelize } from "sequelize"; // importar o sequelize
import dotenv from "dotenv"; // importar o dotenv para localizar as variáveis de ambiente

dotenv.config(); // Corrigido: Carregar as variáveis de ambiente do arquivo .env

// passar a URL completa do .env para a constante
const dbURL = process.env.DB_URL_External;

if (!dbURL) {
  throw new Error('DB_URL is not defined in the environment variables');
}

const sequelize = new Sequelize(dbURL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Dependendo da configuração do seu servidor PostgreSQL
    }
  }
});

// sequelize.authenticate().then(() => {
//   console.log('Connection established successfully.');
// }).catch((error) => {
//   console.error('Unable to establish connection with the database:', error);
// });

/*
  Sincroniza o modelo com o banco de dados, aplicando 
  quaisquer alterações que foram feitas no modelo
*/

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Modelo sincronizado com sucesso com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o modelo com o banco de dados:', error);
});

export default sequelize; //exportar
