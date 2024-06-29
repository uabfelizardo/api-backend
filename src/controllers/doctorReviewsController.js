import DoctorReviewsRepository from "../models/doctorReviewsModel.js";
import DoctorInformation from "../models/doctorinformationModel.js";
import User from "../models/userModel.js";

// Listar todas as avaliações dos médicos
async function findAll(req, res) {
    try {
        const doctorReviews = await DoctorReviewsRepository.findAll({
            include: [
                { model: DoctorInformation, as: 'doctor' },
                { model: User, as: 'user' }
            ]
        });
        res.json(doctorReviews);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao encontrar avaliações' });
    }
}

// Listar as avaliações de determinado utilizador
async function findByUser(req, res) {
    try {
        const doctorReviews = await DoctorReviewsRepository.findAll({
            where: {user_id: req.params.user_id},
            include: [
                { model: DoctorInformation, as: 'doctor' },
                { model: User, as: 'user' }
            ]
        });
        res.json(doctorReviews);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao encontrar avaliações' });
    }
}

// Listar as avaliações sobre determinado médico
async function findByDoctor(req, res) {
    try {
        const doctorReviews = await DoctorReviewsRepository.findAll({
            where: {user_id: req.params.doctorInformation_Id},
            include: [
                { model: DoctorInformation, as: 'doctor' },
                { model: User, as: 'user' }
            ]
        });
        res.json(doctorReviews);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao encontrar avaliações' });
    }
}

// Adicionar nova avaliação para o médico
async function addDoctorReviews(req, res) {
    try {
        const newdoctorReviews = await DoctorReviewsRepository.create({
              user_id: req.body.user_id,
              doctorInformation_userId: req.body.doctorInformation_Id,
              review_text: req.body.review_text,
              review_date: req.body.review_date,
              review_rating: req.body.review_rating
        });
        res.status(201).json(newdoctorReviews);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar a avaliação para o médico' });
    }
}

// Remover avaliação do médico
async function deleteDoctorReviews(req, res) {
    try {
        const deleted = await DoctorReviewsRepository.destroy({
            where: { id: req.params.id },
        });

        if (deleted) {
            res.status(204).end(); // No content
        } else {
            res.status(404).json({ error: 'Avaliação do médico não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao eliminar a avaliação do médico' });
    }
}

export default { findAll, findByUser, findByDoctor, addDoctorReviews, deleteDoctorReviews };
