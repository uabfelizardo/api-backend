import DocumentRepository from "../models/documentModel.js";

function findAll(req, res) {
  DocumentRepository.findAll().then((result) => res.json(result));
}

function findDocument(req, res) {
  DocumentRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addDocument(req, res) {
      await DocumentRepository.create(
        {
          document: req.body.document,
          date: req.body.date,
          appointment_id:req.body.appointment_id
        }
    );
}

async function updateDocument(req, res) {
  await DocumentRepository.update(
    {
      document: req.body.document,
      date: req.body.date,
      appointment_id:req.body.appointment_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  DocumentRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteDocument(req, res) {
  await DocumentRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  DocumentRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addDocument, findDocument, updateDocument, deleteDocument };
