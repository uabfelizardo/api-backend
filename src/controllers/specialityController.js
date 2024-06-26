import SpecialityRepository from "../models/specialityModel.js";

function findAll(req, res) {
  SpecialityRepository.findAll().then((result) => res.json(result));
}

function findBySpecialityId(req, res) {
  SpecialityRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function findBySpecialityDescription(req, res) {
  SpecialityRepository.findAll({
    where: {
      description: req.params.description
    }
  })
  .then((result) => res.json(result))
  .catch((error) => {
    console.error(error);
    res.status(500).send('An error occurred while fetching the specialties.');
  });
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

export default { findAll, 
  addSpeciality, 
  findBySpecialityId, 
  findBySpecialityDescription,
  updateSpeciality, 
  deleteSpeciality };
