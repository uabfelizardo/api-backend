import UserRoleRepository from "../models/userroleModel.js";

function findAll(req, res) {
  UserRoleRepository.findAll().then((result) => res.json(result));
}

function findUserRole(req, res) {
  UserRoleRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addUserRole(req, res) {
      await UserRoleRepository.create(
        {
          date: req.body.date,
          user_id:req.body.user_id,
          role_id:req.body.role_id
        }
    );
}

async function updateUserRole(req, res) {
  await UserRoleRepository.update(
    {
      date: req.body.date,
      user_id:req.body.user_id,
      role_id:req.body.role_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  UserRoleRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteUserRole(req, res) {
  await UserRoleRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  UserRoleRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addUserRole, findUserRole, updateUserRole, deleteUserRole };
