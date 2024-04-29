import DrugRepository from "../models/drugModel.js";

function findAll(req, res) {
  DrugRepository.findAll().then((result) => res.json(result));
}

function findDrug(req, res) {
  DrugRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addDrug(req, res) {
      await DrugRepository.create(
        {
          name: req.body.name,
          validity: req.body.validity,
          laboratory:req.body.laboratory
        }
    );
}

async function updateDrug(req, res) {
  await DrugRepository.update(
    {
      name: req.body.name,
      validity: req.body.validity,
      laboratory:req.body.laboratory
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  DrugRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteDrug(req, res) {
  await DrugRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  DrugRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addDrug, findDrug, updateDrug, deleteDrug };
