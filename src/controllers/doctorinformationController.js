import { Where } from "sequelize/lib/utils";
import DoctorSpecialties from "../models/doctorSpecialtiesModel.js";
import DoctorInformation from "../models/doctorinformationModel.js";
import DoctorInformationRepository from "../models/doctorinformationModel.js";
import User from "../models/userModel.js"
import Speciality from "../models/specialityModel.js";

// Listar todas as informações dos médicos
async function findAll(req, res) {
  try {
    const doctorInformations = await DoctorInformationRepository.findAll();
    res.json(doctorInformations);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar informações dos médicos' });
  }
}

// Buscar uma informação de médico específica por ID
async function findDoctorInformation(req, res) {
  try {
    const doctorInformation = await DoctorInformationRepository.findByPk(req.params.id);
    if (doctorInformation) {
      res.json(doctorInformation);
    } else {
      res.status(404).json({ error: 'Informação do médico não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar informação do médico' });
  }
}

// Obter informação do médico (dados do médico, especialidade e avaliação)
async function getFullDoctorInfo(req, res) {
  try {
    const doctorInformation = await DoctorInformationRepository.findAll({
      include: [
        { model: DoctorSpecialties, as: 'specialties', include: [{ model: Speciality, as: 'specialty' }] },
        { model: User, as: 'doctorInformation' }
      ]
    })
    if (doctorInformation) {
      res.json(doctorInformation);
    } else {
      res.status(404).json({ error: 'Informação do médico não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao encontrar informação do médico' });
  }
}

// Obter informação do médico (dados do médico, especialidade e avaliação) através do seu ID
async function getFullDoctorInfoByDoctorId(req, res) {
  try {
    const doctorInformation = await User.findAll({
      Where: { user_id: req.params.user_id },
      include: DoctorInformation, DoctorSpecialties
    })
    if (doctorInformation) {
      res.json(doctorInformation);
    } else {
      res.status(404).json({ error: 'Informação do médico não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao encontrar informação do médico' });
  }
}

// Adicionar uma nova informação de médico
async function addDoctorInformation(req, res) {
  try {
    const newDoctorInformation = await DoctorInformationRepository.create({
      additionalInformation: req.body.additionalInformation,
      user_id: req.body.user_id,
    });
    res.status(201).json(newDoctorInformation);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar informação do médico' });
  }
}

// Atualizar uma informação de médico existente por ID
async function updateDoctorInformation(req, res) {
  try {
    const [updated] = await DoctorInformationRepository.update(
      {
        additionalInformation: req.body.additionalInformation,
        user_id: req.body.user_id,
      },
      {
        where: { id: req.params.id },
      }
    );

    if (updated) {
      const updatedDoctorInformation = await DoctorInformationRepository.findByPk(req.params.id);
      res.json(updatedDoctorInformation);
    } else {
      res.status(404).json({ error: 'Informação do médico não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar informação do médico' });
  }
}

// Deletar uma informação de médico existente por ID
async function deleteDoctorInformation(req, res) {
  try {
    const deleted = await DoctorInformationRepository.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).end(); // No content
    } else {
      res.status(404).json({ error: 'Informação do médico não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar informação do médico' });
  }
}

export default { findAll, findDoctorInformation, getFullDoctorInfo, getFullDoctorInfoByDoctorId, addDoctorInformation, updateDoctorInformation, deleteDoctorInformation };
