import CommunicationTypeRepository from "../models/communicationtypeModel.js";

function findAll(req, res) {
  CommunicationTypeRepository.findAll().then((result) => res.json(result));
}

function findCommunicationType(req, res) {
  CommunicationTypeRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addCommunicationType(req, res) {
      await CommunicationTypeRepository.create(
        {
          description: req.body.description
        }
    );
}

async function updateCommunicationType(req, res) {
  await CommunicationTypeRepository.update(
    {
      description: req.body.description
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  CommunicationTypeRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteCommunicationType(req, res) {
  await CommunicationTypeRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  CommunicationTypeRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addCommunicationType, findCommunicationType, updateCommunicationType, deleteCommunicationType };
