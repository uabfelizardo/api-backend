// Importe o modelo de disponibilidade
import Availability from '../models/availabilityModel.js';

// Função para criar uma nova disponibilidade
async function createAvailability(req, res) {
  try {
    const {
      doctor_id,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      startTime,
      endTime,
    } = req.body;

    // Crie a disponibilidade no banco de dados
    const newAvailability = await Availability.create({
      doctor_id,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      startTime,
      endTime,
    });

    res.status(201).json(newAvailability);
  } catch (error) {
    console.error('Erro ao criar disponibilidade:', error);
    res.status(500).json({ error: 'Erro ao criar disponibilidade' });
  }
}

// Função para listar todas as disponibilidades
async function listAvailabilities(req, res) {
  try {
    const availabilities = await Availability.findAll();
    res.json(availabilities);
  } catch (error) {
    console.error('Erro ao buscar disponibilidades:', error);
    res.status(500).json({ error: 'Erro ao buscar disponibilidades' });
  }
}

// Função para atualizar uma disponibilidade existente
async function updateAvailability(req, res) {
  const { id } = req.params;
  const {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    startTime,
    endTime,
  } = req.body;

  try {
    const availability = await Availability.findByPk(id);

    if (!availability) {
      return res.status(404).json({ error: 'Disponibilidade não encontrada' });
    }

    await availability.update({
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      startTime,
      endTime,
    });

    res.json(availability);
  } catch (error) {
    console.error('Erro ao atualizar disponibilidade:', error);
    res.status(500).json({ error: 'Erro ao atualizar disponibilidade' });
  }
}

// Função para deletar uma disponibilidade existente
async function deleteAvailability(req, res) {
  const { id } = req.params;

  try {
    const availability = await Availability.findByPk(id);

    if (!availability) {
      return res.status(404).json({ error: 'Disponibilidade não encontrada' });
    }

    await availability.destroy();

    res.json({ message: 'Disponibilidade deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar disponibilidade:', error);
    res.status(500).json({ error: 'Erro ao deletar disponibilidade' });
  }
}

export default {
  createAvailability,
  listAvailabilities,
  updateAvailability,
  deleteAvailability,
};
