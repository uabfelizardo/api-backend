import AppointmentNoteRepository from "../models/appointmentnoteModel.js";

function findAll(req, res) {
  AppointmentNoteRepository.findAll().then((result) => res.json(result));
}

function findAppointmentNote(req, res) {
  AppointmentNoteRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addAppointmentNote(req, res) {
      await AppointmentNoteRepository.create(
        {
          note: req.body.note,
          date: req.body.date,
          appointment_id:req.body.appointment_id,
          user_id:req.body.user_id
        }
    );
}

async function updateAppointmentNote(req, res) {
  await AppointmentNoteRepository.update(
    {
      note: req.body.note,
      date: req.body.date,
      appointment_id:req.body.appointment_id,
      user_id:req.body.user_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  AppointmentNoteRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteAppointmentNote(req, res) {
  await AppointmentNoteRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  AppointmentNoteRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addAppointmentNote, findAppointmentNote, updateAppointmentNote, deleteAppointmentNote };
