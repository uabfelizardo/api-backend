import DiagnosisRepository from "../models/diagnosisModel.js";

function findAll(req, res) {
  DiagnosisRepository.findAll().then((result) => res.json(result));
}

function findDiagnosis(req, res) {
  DiagnosisRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addDiagnosis(req, res) {
      await DiagnosisRepository.create(
        {
          diagnosis: req.body.diagnosis,
          appointment_id: req.body.appointment_id,
          user_id:req.body.user_id
        }
    );
}

async function updateDiagnosis(req, res) {
  await DiagnosisRepository.update(
    {
      diagnosis: req.body.diagnosis,
      appointment_id: req.body.appointment_id,
      user_id:req.body.user_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  DiagnosisRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteDiagnosis(req, res) {
  await DiagnosisRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  DiagnosisRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addDiagnosis, findDiagnosis, updateDiagnosis, deleteDiagnosis };
