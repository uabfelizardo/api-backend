import DoctorSpecialtiesRepository from "../models/doctorSpecialtiesModel.js";

// Listar todas as informações dos médicos
async function findAll(req, res) {
  try {
    const doctorSpecialties = await DoctorSpecialtiesRepository.findAll();
    res.json(doctorSpecialties);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar informações dos médicos' });
  }
}

// Obter especialidade do médico através do seu id de utilizador
async function findDoctorSpecialty(req, res) {
  try {
    const doctorSpecialties = await DoctorSpecialtiesRepository.findByPk(req.params.id);
    if (doctorSpecialties) {
      res.json(doctorSpecialties);
    } else {
      res.status(404).json({ error: 'Especialidade do médico não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao encontrar a especialidade do médico' });
  }
}

// Obter médicos com determinada especialidade através do id
async function findSpecialtyDoctors(req, res) {
  try {
    const doctorSpecialties = await DoctorSpecialtiesRepository.findByPk(req.params.id);
    if (doctorSpecialties) {
      res.json(doctorSpecialties);
    } else {
      res.status(404).json({ error: 'Médicos da especialidade não encontrados' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao encontrar médicos da especialidade' });
  }
}

// Adicionar nova especialidade para o médico
async function addDoctorSpecialties(req, res) {
  try {
    const newdoctorSpecialties = await DoctorSpecialtiesRepository.create({
      specialty_Id: req.body.specialty_id,
      user_id: req.body.user_id,
    });
    res.status(201).json(newdoctorSpecialties);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar a especialidade para o médico' });
  }
}

// Remover especialidade do médico
async function deleteDoctorSpecialties(req, res) {
  try {
    const deleted = await DoctorSpecialtiesRepository.destroy({
      where: { user_id: req.params.user_id, specialty_Id: req.params.specialty_Id },
    });

    if (deleted) {
      res.status(204).end(); // No content
    } else {
      res.status(404).json({ error: 'Especialidade do médico não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao eliminar a especialidade do médico' });
  }
}

export default { findAll, findDoctorSpecialty, findSpecialtyDoctors, addDoctorSpecialties, deleteDoctorSpecialties };
