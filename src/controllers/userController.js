import UserRepository from '../models/userModel.js';
import path from 'path';

function findAll(req, res) {
  UserRepository.findAll().then((result) => res.json(result));
}

function findUser(req, res) {
  UserRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addUser(req, res) {
  try {
    const img = req.file ? req.file.filename : null;
    const newUser = await UserRepository.create({
      name: req.body.name,
      title: req.body.title,
      gender: req.body.gender,
      birthdate: req.body.birthdate,
      email: req.body.email,
      password: req.body.password,
      numeroutent: req.body.numeroutent,
      img: img // Adicionado campo de imagem
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function updateUser(req, res) {
  try {
    const img = req.file ? req.file.filename : null;
    await UserRepository.update(
      {
        name: req.body.name,
        title: req.body.title,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        email: req.body.email,
        password: req.body.password,
        numeroutent: req.body.numeroutent,
        img: img // Atualizado campo de imagem
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const updatedUser = await UserRepository.findByPk(req.params.id);
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteUser(req, res) {
  try {
    await UserRepository.destroy({
      where: {
        id: req.params.id,
      },
    });

    const users = await UserRepository.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await UserRepository.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default { findAll, addUser, findUser, updateUser, deleteUser, loginUser };
