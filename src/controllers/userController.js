import UserRepository from "../models/userModel.js";

function findAll(req, res) {
  UserRepository.findAll().then((result) => res.json(result));
}

function findUser(req, res) {
  UserRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addUser(req, res) {
      await UserRepository.create(
        {
          name: req.body.name,
          gender: req.body.gender,
          birthdate: req.body.birthdate,
          email: req.body.email,
          password: req.body.password,
          numeroutent: req.body.numeroutent,
          user_type_id: req.body.user_type_id
        }
    );
}

async function updateUser(req, res) {
  await UserRepository.update(
    {
      name: req.body.name,
      gender: req.body.gender,
      birthdate: req.body.birthdate,
      email: req.body.email,
      password: req.body.password,
      numeroutent: req.body.numeroutent,
      user_type_id: req.body.user_type_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  UserRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteUser(req, res) {
  await UserRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  UserRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addUser, findUser, updateUser, deleteUser };
