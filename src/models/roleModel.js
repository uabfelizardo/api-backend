import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const role = db.define("role", {
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true // Garante que cada perfil seja único
  }
});

async function initializeRoles() {
  try {
    const count = await role.count();
    if (count === 0) {
      await role.bulkCreate([
        { description: 'Admin' },
        { description: 'Doctor' },
        { description: 'Patient' }
      ]);
      console.log('Perfis foram inseridos na base de dados.');
    } else {
      console.log('Perfis já estão presentes na base de dados.');
    }
  } catch (error) {
    console.error('Erro ao inicializar perfis:', error);
  }
}

// Chama a função de inicialização ao sincronizar o modelo com o banco de dados
role.sync().then(() => {
  initializeRoles();
});

export default role;
