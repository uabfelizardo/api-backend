import AppointmentRepository from "../models/appointmentModel.js";

async function findAll(req, res) {
  try {
    const appointments = await AppointmentRepository.findAll();
    res.json(appointments);
  } catch (err) {
    console.error('Erro ao buscar agendamentos:', err);
    res.status(500).json({ error: 'Erro ao buscar agendamentos.' });
  }
}

async function findAppointment(req, res) {
  try {
    const appointment = await AppointmentRepository.findByPk(req.params.id);
    if (!appointment) {
      res.status(404).json({ error: 'Agendamento não encontrado.' });
      return;
    }
    res.json(appointment);
  } catch (err) {
    console.error('Erro ao buscar agendamento:', err);
    res.status(500).json({ error: 'Erro ao buscar agendamento.' });
  }
}

async function addAppointment(req, res) {
  try {
    const newAppointment = await AppointmentRepository.create({
      date: req.body.date,
      time: req.body.time,
      observation: req.body.observation,
      patient_id: req.body.patient_id,
      doctor_id: req.body.doctor_id,
      approved: req.body.approved || false // Se não for fornecido, padrão para false
    });
    res.status(201).json(newAppointment);
  } catch (err) {
    console.error('Erro ao adicionar agendamento:', err);
    res.status(500).json({ error: 'Erro ao adicionar agendamento.' });
  }
}

async function updateAppointment(req, res) {
  try {
    const appointment = await AppointmentRepository.findByPk(req.params.id);
    if (!appointment) {
      res.status(404).json({ error: 'Agendamento não encontrado.' });
      return;
    }

    await AppointmentRepository.update({
      date: req.body.date,
      time: req.body.time,
      observation: req.body.observation,
      patient_id: req.body.patient_id,
      doctor_id: req.body.doctor_id,
      approved: req.body.approved // Atualiza o campo approved conforme fornecido
    }, {
      where: { id: req.params.id }
    });

    const updatedAppointment = await AppointmentRepository.findByPk(req.params.id);
    res.json(updatedAppointment);
  } catch (err) {
    console.error('Erro ao atualizar agendamento:', err);
    res.status(500).json({ error: 'Erro ao atualizar agendamento.' });
  }
}

async function deleteAppointment(req, res) {
  try {
    const appointment = await AppointmentRepository.findByPk(req.params.id);
    if (!appointment) {
      res.status(404).json({ error: 'Agendamento não encontrado.' });
      return;
    }

    await AppointmentRepository.destroy({
      where: { id: req.params.id }
    });

    const appointments = await AppointmentRepository.findAll();
    res.json(appointments);
  } catch (err) {
    console.error('Erro ao deletar agendamento:', err);
    res.status(500).json({ error: 'Erro ao deletar agendamento.' });
  }
}

export default { findAll, findAppointment, addAppointment, updateAppointment, deleteAppointment };
