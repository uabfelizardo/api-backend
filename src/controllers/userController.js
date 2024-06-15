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

async function findUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
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
export default { findAll, findUser, addUser, updateUser, deleteUser, loginUser, findUserDoctorInformation };
