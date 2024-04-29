import NotificationRepository from "../models/notificationModel.js";

function findAll(req, res) {
  NotificationRepository.findAll().then((result) => res.json(result));
}

function findNotification(req, res) {
  NotificationRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addNotification(req, res) {
      await NotificationRepository.create(
        {
          defaulttext: req.body.defaulttext,
          user_id: req.body.user_id
        }
    );
}

async function updateNotification(req, res) {
  await NotificationRepository.update(
    {
      defaulttext: req.body.defaulttext,
      user_id: req.body.user_id
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  NotificationRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteNotification(req, res) {
  await NotificationRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  NotificationRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addNotification, findNotification, updateNotification, deleteNotification };
