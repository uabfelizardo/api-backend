import { Sequelize, DataTypes } from 'sequelize';
import db from "../db.js";

const speciality = db.define("speciality", {
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true // Garante que cada especialidade seja única
  }
});

// Função para inserir especialidades na inicialização do banco de dados
async function initializeSpecialities() {
  try {
    const count = await speciality.count();
    if (count === 0) {
      // Insere especialidades apenas se não houver nenhuma na base de dados
      await speciality.bulkCreate([
        { description: 'Allergy and Immunology' },
        { description: 'Anesthesiology' },
        { description: 'Cardiology' },
        { description: 'Cardiothoracic Surgery' },
        { description: 'Clinical Genetics' },
        { description: 'Clinical Pharmacology' },
        { description: 'Critical Care Medicine' },
        { description: 'Dermatology' },
        { description: 'Emergency Medicine' },
        { description: 'Endocrinology' },
        { description: 'Family Medicine' },
        { description: 'Gastroenterology' },
        { description: 'Geriatric Medicine' },
        { description: 'Gynecology and Obstetrics' },
        { description: 'Hematology' },
        { description: 'Hepatology' },
        { description: 'Infectious Disease' },
        { description: 'Internal Medicine' },
        { description: 'Medical Genetics' },
        { description: 'Nephrology' },
        { description: 'Neurology' },
        { description: 'Neurosurgery' },
        { description: 'Nuclear Medicine' },
        { description: 'Nutrition' },
        { description: 'Oncology' },
        { description: 'Ophthalmology' },
        { description: 'Orthopedic Surgery' },
        { description: 'Otolaryngology (ENT)' },
        { description: 'Pain Management' },
        { description: 'Pathology' },
        { description: 'Pediatrics' },
        { description: 'Physical Medicine and Rehabilitation' },
        { description: 'Plastic Surgery' },
        { description: 'Preventive Medicine' },
        { description: 'Psychiatry' },
        { description: 'Pulmonology' },
        { description: 'Radiation Oncology' },
        { description: 'Radiology' },
        { description: 'Rheumatology' },
        { description: 'Sleep Medicine' },
        { description: 'Sports Medicine' },
        { description: 'Surgery' },
        { description: 'Thoracic Surgery' },
        { description: 'Transplant Surgery' },
        { description: 'Urology' },
        { description: 'Vascular Surgery' }
      ]);
      console.log('Especialidades foram inseridas na base de dados.');
    } else {
      console.log('Especialidades já estão presentes na base de dados.');
    }
  } catch (error) {
    console.error('Erro ao inicializar especialidades:', error);
  }
}

// Chama a função de inicialização ao sincronizar o modelo com o banco de dados
speciality.sync().then(() => {
  initializeSpecialities();
});

export default speciality;
