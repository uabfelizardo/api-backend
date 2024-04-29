import CommunicationRepository from "../models/communicationModel.js";

function findAll(req, res) {
  CommunicationRepository.findAll().then((result) => res.json(result));
}

function findCommunication(req, res) {
  CommunicationRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addCommunication(req, res) {
      await CommunicationRepository.create(
        {
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          text:req.body.text,
          user_id:req.body.user_id,
          communication_type_id:req.body.communication_type_id
        }
    );
}

async function updateCommunication(req, res) {
  await CommunicationRepository.update(
    {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      text:req.body.text,
      user_id:req.body.user_id,
      communication_type_id:req.body.communication_type_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  CommunicationRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteCommunication(req, res) {
  await CommunicationRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  CommunicationRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addCommunication, findCommunication, updateCommunication, deleteCommunication };
