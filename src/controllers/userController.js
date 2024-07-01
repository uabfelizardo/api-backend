import { Op } from 'sequelize';
import User from '../models/userModel.js';
import DoctorInformation from '../models/doctorinformationModel.js';

async function findAll(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findAllDoctors(req, res) {
  try {
    const doctors = await User.findAll({
      where: {
        role: 'Doctor'
      }
    });

    if (!doctors) {
      return res.status(404).send('User not found');
    }

    // Inclua a imagem como uma URL base64
    if (doctors.img) {
      doctors.img = `data:image/jpeg;base64,${Buffer.from(doctors.img).toString('base64')}`;
    }

    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findByDoctorsID(req, res) {
  try {
    const doctor = await User.findOne({
      where: {
        id: req.params.id,
        role: 'Doctor'
      },
    });

    if (doctor) {

    if (!doctor) {
      return res.status(404).send('User not found');
    }

    // Inclua a imagem como uma URL base64
    if (doctor.img) {
      doctor.img = `data:image/jpeg;base64,${Buffer.from(doctor.img).toString('base64')}`;
    }

    res.json(doctor);
    } else {
      res.status(404).json({ error: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findAllPatient(req, res) {
  try {
    const patient = await User.findAll({
      where: {
        role: 'Patient'
      }
    });

    if (!patient) {
      return res.status(404).send('User not found');
    }

    // Inclua a imagem como uma URL base64
    if (patient.img) {
      patient.img = `data:image/jpeg;base64,${Buffer.from(patient.img).toString('base64')}`;
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      // Inclua a imagem como uma URL base64
      if (user.img) {
        user.img = `data:image/jpeg;base64,${Buffer.from(user.img).toString('base64')}`;
      }

      res.json(user);


    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateUserState(req, res) {
  const { state } = req.body; // Captura o novo estado do usuário a ser atualizado
  try {
    const userId = req.params.id;
    console.log(`Updating user state for userId: ${userId}`);

    const updatedUser = await User.findByPk(userId);

    if (!updatedUser) {
      return res.status(404).send(`User with id ${userId} not found`);
    }

    // Verifica se o estado fornecido é um valor válido (Enabled ou Disabled)
    const validStates = ['Enabled', 'Disabled'];
    if (!validStates.includes(state)) {
      return res.status(400).send('Invalid state value. Allowed values are Enabled or Disabled');
    }

    // Atualiza o campo state do usuário
    updatedUser.state = state;
    await updatedUser.save();

    res.json(updatedUser);
  } catch (error) {
    console.error(`Failed to update user state: ${error}`);
    res.status(500).json({ error: error.message });
  }
}

async function addUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    await User.update(req.body, {
      where: { id: req.params.id }
    });
    const updatedUser = await User.findByPk(req.params.id);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    await User.destroy({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function loginUser(req, res) {
  try {
    const user = await User.findOne({
      where: { email: req.body.email, password: req.body.password }
    });
    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findUserIdByFirstName(req, res) {
  const { firstName } = req.params;
  try {
    const user = await User.findOne({
      where: {
        firstName: firstName,
        role: 'Doctor' // Certifique-se de que a condição de busca está correta
      }
    });
    if (user) {
      res.json({ userId: user.id });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findUserPatientIdByFirstName(req, res) {
  const { firstName } = req.params;
  try {
    const user = await User.findOne({
      where: {
        firstName: firstName,
        role: 'Patient' // Certifique-se de que a condição de busca está correta
      }
    });
    if (user) {
      res.json({ userId: user.id });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// function findBySpecialityDescription2(req, res) {
//   User.findAll({
//     where: {
//       firstName: req.params.firstName
//     }
//   })
//   .then((result) => res.json(result))
//   .catch((error) => {
//     console.error(error);
//     res.status(500).send('An error occurred while fetching the specialties.');
//   });
// }

async function findBySpecialityDescription3(req, res) {
  try {
    const users = await User.findAll({
      where: {
        firstName: {
          [Op.like]: `%${req.params.firstName}%`
        }
      }
    });
    
    if (users.length === 0) {
      return res.status(404).send('User not found');
    }

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the users.');
  }
}


async function findUserDoctorInformation(req, res) {
  try {
    const user = await User.findByPk(req.params.id, {
      include: {
        model: DoctorInformation,
        as: 'doctorInformation'
      }
    });
    if (user && user.doctorInformation) {
      res.json(user.doctorInformation);
    } else {
      res.status(404).json({ error: 'DoctorInformation not found for the user' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findUserSpeciality(req, res) {
  try {
    const userWithSpecialities = await User.findByPk(req.params.id, {
      include: {
        model: DoctorSpeciality,
        as: 'doctorSpecialities',
        include: {
          model: Speciality,
          as: 'speciality'
        }
      }
    });

    if (userWithSpecialities && userWithSpecialities.doctorSpecialities.length > 0) {
      res.json(userWithSpecialities.doctorSpecialities.map(ds => ds.speciality));
    } else {
      res.status(404).json({ error: 'Specialities not found for the user' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default { findAll, 
  findUser, 
  addUser, 
  updateUser, 
  deleteUser, 
  loginUser, 
  findUserDoctorInformation, 
  findAllDoctors, 
  findByDoctorsID,
  findAllPatient,
  findUserSpeciality,
  findUserIdByFirstName,
  findUserPatientIdByFirstName,
  updateUserState
};
