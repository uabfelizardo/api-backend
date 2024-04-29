import AppointmentRepository from "../models/appointmentModel.js";

function findAll(req, res) {
  AppointmentRepository.findAll().then((result) => res.json(result));
}

function findAppointment(req, res) {
  AppointmentRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addAppointment(req, res) {
      await AppointmentRepository.create(
        {
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          observation:req.body.observation,
          user_id:req.body.user_id
        }
    );
}

async function updateAppointment(req, res) {
  await AppointmentRepository.update(
    {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      observation:req.body.observation,
      user_id:req.body.user_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  AppointmentRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteAppointment(req, res) {
  await AppointmentRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  AppointmentRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addAppointment, findAppointment, updateAppointment, deleteAppointment };
