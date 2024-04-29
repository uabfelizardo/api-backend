import AppointmentDrugRepository from "../models/appointmentdrugModel.js";

function findAll(req, res) {
  AppointmentDrugRepository.findAll().then((result) => res.json(result));
}

function findAppointmentDrug(req, res) {
  AppointmentDrugRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addAppointmentDrug(req, res) {
      await AppointmentDrugRepository.create(
        {
          date: req.body.date,
          appointment_id: req.body.appointment_id,
          drug_id:req.body.drug_id
        }
    );
}

async function updateAppointmentDrug(req, res) {
  await AppointmentDrugRepository.update(
    {
      date: req.body.date,
      appointment_id: req.body.appointment_id,
      drug_id:req.body.drug_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  AppointmentDrugRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteAppointmentDrug(req, res) {
  await AppointmentDrugRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  AppointmentDrugRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addAppointmentDrug, findAppointmentDrug, updateAppointmentDrug, deleteAppointmentDrug };
