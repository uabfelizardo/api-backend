import RoleRepository from "../models/roleModel.js";

function findAll(req, res) {
  RoleRepository.findAll().then((result) => res.json(result));
}

function findRole(req, res) {
  RoleRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addRole(req, res) {
      await RoleRepository.create(
        {
          description: req.body.description
        }
    );
}

async function updateRole(req, res) {
  await RoleRepository.update(
    {
      description: req.body.description
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  RoleRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteRole(req, res) {
  await RoleRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  RoleRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addRole, findRole, updateRole, deleteRole };
