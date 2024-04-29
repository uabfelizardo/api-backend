import UserTypeRepository from "../models/usertypeModel.js";

function findAll(req, res) {
  UserTypeRepository.findAll().then((result) => res.json(result));
}

function findUserType(req, res) {
  UserTypeRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addUserType(req, res) {
      await UserTypeRepository.create(
        {
          description: req.body.description
        }
    );
}

async function updateUserType(req, res) {
  await UserTypeRepository.update(
    {
      description: req.body.description
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  UserTypeRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteUserType(req, res) {
  await UserTypeRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  UserTypeRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addUserType, findUserType, updateUserType, deleteUserType };
