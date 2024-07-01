import DoctorSpecialityRepository from "../models/doctorSpecialityModel.js";

function findAll(req, res) {
  DoctorSpecialityRepository.findAll().then((result) => res.json(result));
}

function findDoctorSpeciality(req, res) {
  DoctorSpecialityRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addDoctorSpeciality(req, res) {
      await DoctorSpecialityRepository.create(
        {
          date: req.body.date,
          user_id:req.body.user_id,
          speciality_id:req.body.speciality_id
        }
    );
}

async function updateDoctorSpeciality(req, res) {
  await DoctorSpecialityRepository.update(
    {
      date: req.body.date,
      user_id:req.body.user_id,
      speciality_id:req.body.speciality_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  DoctorSpecialityRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteDoctorSpeciality(req, res) {
  await DoctorSpecialityRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  DoctorSpecialityRepository.findAll().then((result) => res.json(result));
}
async function findAllDoctorsWithSpecialities(req, res) {
  try {
    const doctorsWithSpecialities = await DoctorSpecialityRepository.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Speciality, as: 'speciality' }
      ]
    });
    res.json(doctorsWithSpecialities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findDoctorSpecialitiesByUserId(req, res) {
  const userId = req.params.userId;

  try {
    const doctorSpecialities = await DoctorSpecialityRepository.findAll({
      where: { user_id: userId },
      include: [
        { model: User, as: 'user' },
        { model: Speciality, as: 'speciality' }
      ]
    });

    // Mapeia os resultados para incluir a descrição da especialidade
    const doctorSpecialitiesWithDescription = doctorSpecialities.map((doctorSpeciality) => ({
      id: doctorSpeciality.id,
      firstName: doctorSpeciality.user.firstName,
      lastName: doctorSpeciality.user.lastName,
      speciality: doctorSpeciality.speciality.description // Inclui a descrição da especialidade
    }));

    res.json(doctorSpecialitiesWithDescription);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching doctor specialities by user ID' });
  }
}



export default { findAll, 
  addDoctorSpeciality, 
  findDoctorSpeciality, 
  updateDoctorSpeciality, 
  deleteDoctorSpeciality,
  findAllDoctorsWithSpecialities,
  findDoctorSpecialitiesByUserId};
