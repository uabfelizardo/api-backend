import SpecialityRepository from "../models/specialityModel.js";

function findAll(req, res) {
  SpecialityRepository.findAll().then((result) => res.json(result));
}

function findSpeciality(req, res) {
  SpecialityRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addSpeciality(req, res) {
  try {
    const newSpeciality = await SpecialityRepository.create(req.body);
    res.status(201).json(newSpeciality);
  } catch (error) {
    console.error('Erro ao criar a especialidade:', error);
    res.status(500).json({ error: 'Não foi possível criar a especialidade' });
  }
}

async function updateSpeciality(req, res) {
  await SpecialityRepository.update(
    {
      description: req.body.description
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  SpecialityRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteSpeciality(req, res) {
  await SpecialityRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  SpecialityRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addSpeciality, findSpeciality, updateSpeciality, deleteSpeciality };
