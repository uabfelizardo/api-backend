import express from "express";
import role from "./src/controllers/roleController.js";
import user from "./src/controllers/userController.js";
import doctorInformation from "./src/controllers/doctorinformationController.js";
import doctorSpecialties from "./src/controllers/doctorSpecialtiesController.js";
import doctorReviews from "./src/controllers/doctorReviewsController.js";
import userrole from "./src/controllers/userroleController.js";
import appointment from "./src/controllers/appointmentController.js";
import appointmentdrug from "./src/controllers/appointmentdrugController.js";
import appointmentnote from "./src/controllers/appointmentnoteController.js";
import communication from "./src/controllers/communicationController.js";
import communicationtype from "./src/controllers/communicationtypeController.js";
import diagnosis from "./src/controllers/diagnosisController.js";
import document from "./src/controllers/documentController.js";
import drug from "./src/controllers/drugController.js";
import notification from "./src/controllers/notificationController.js";
import speciality from "./src/controllers/specialityController.js";
import doctorspeciality from "./src/controllers/doctorSpecialityController.js";
import availability from "./src/controllers/availabilityController.js";
import { upload }  from "./src/config/multerConfig.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import DoctorInformation from './src/models/doctorinformationModel.js';
import DoctorSpecialties from './src/models/doctorSpecialtiesModel.js';
import DoctorReviews from './src/models/doctorReviewsModel.js';
import Speciality from './src/models/specialityModel.js';
import User from "./src/models/userModel.js";

// Associação de tabelas (para joins)
// DoctorInformation.associate({ DoctorSpecialties, User });
// DoctorSpecialties.associate({ DoctorInformation, Speciality });
// DoctorReviews.associate({ User, DoctorInformation })
// Speciality.associate({ DoctorSpecialties });
// User.associate({ DoctorInformation });

const routes = express.Router();

// Routes for role model
routes.get("/role", role.findAll);
routes.post("/role", role.addRole);
routes.get("/role/:id", role.findRole);
routes.get("/role/description/:description", role.findRoleByDescription);
routes.put("/role/:id", role.updateRole);
routes.delete("/role/:id", role.deleteRole);
routes.get('/role/:description', role.findRoleByDescription);

// Routes for user model
// Rota para adicionar um novo usuário com upload de imagem
routes.post('/user', upload.single('img'), user.addUser);
// Rota para atualizar um usuário com upload de imagem
routes.put('/user/:id', upload.single('img'), user.updateUser);

routes.get("/user", user.findAll);
routes.get("/userAllDoctors", user.findAllDoctors);
routes.get("/userDoctorsByID/:id", user.findByDoctorsID);
routes.get("/userAllPatients", user.findAllPatient);
routes.get("/userAllPatients/:id", user.findAllPatient);
routes.post("/user", user.addUser);
routes.get("/user/:id", user.findUser);
routes.put("/user/:id", user.updateUser);
routes.put("/user/state/:userId", user.updateUserState);
routes.delete("/user/:id", user.deleteUser);
routes.post("/login", user.loginUser);
routes.get('/user/:id/doctorinformation', user.findUserDoctorInformation); 
routes.get('/user/:id/speciality', user.findUserSpeciality);
routes.get('/user/firstName/:firstName',user.findUserIdByFirstName)
routes.get('/user/firstNamePaient/:firstName',user.findUserPatientIdByFirstName)

// Routes for userrole model
routes.get("/userrole", userrole.findAll);
routes.post("/userrole", userrole.addUserRole);
routes.get("/userrole/:id", userrole.findUserRole);
routes.put("/userrole/:id", userrole.updateUserRole);
routes.delete("/userrole/:id", userrole.deleteUserRole);

// Routes for DoctorInformation model
routes.get("/doctorinformation", doctorInformation.findAll);
routes.post("/doctorinformation", doctorInformation.addDoctorInformation);
routes.get("/doctorinformation/:id", doctorInformation.findDoctorInformation);
routes.put("/doctorinformation/:id", doctorInformation.updateDoctorInformation);
routes.put("/doctorinformation/updateRating/:id/:rating", doctorInformation.updateDoctorInformation);
routes.delete("/doctorinformation/:id", doctorInformation.deleteDoctorInformation);

// Routes for speciality model
routes.get("/speciality", speciality.findAll);
routes.post("/speciality", speciality.addSpeciality);
routes.get("/speciality/:id", speciality.findBySpecialityId);
routes.get("/speciality/description/:description", speciality.findBySpecialityDescription);
routes.put("/speciality/:id", speciality.updateSpeciality);
routes.delete("/speciality/:id", speciality.deleteSpeciality);

// Routes for DoctorSpeciality model
routes.get("/doctorspeciality", doctorspeciality.findAll);
routes.post("/doctorspeciality", doctorspeciality.addDoctorSpeciality);
routes.get("/doctorspeciality/:id", doctorspeciality.findDoctorSpeciality);
routes.put("/doctorspeciality/:id", doctorspeciality.updateDoctorSpeciality);
routes.delete("/doctorspeciality/:id", doctorspeciality.deleteDoctorSpeciality);
routes.delete("/doctorwithspecialityall", doctorspeciality.findAllDoctorsWithSpecialities);
routes.get('/doctorspeciality/user/:userId', doctorspeciality.findDoctorSpecialitiesByUserId);

//Doctor Availability
routes.post('/availability', availability.createAvailability);
routes.get('/availabilities', availability.listAvailabilities);
routes.put("/availability/:id", availability.updateAvailability);
routes.delete("/availability/:id", availability.deleteAvailability);

// Routes for Appointment model
routes.get("/appointment", appointment.findAll);
routes.post("/appointment", appointment.addAppointment);
routes.get("/appointment/:id", appointment.findAppointment);
routes.put("/appointment/:id", appointment.updateAppointment);
routes.delete("/appointment/:id", appointment.deleteAppointment);

// Routes for AppointmentDrug model
routes.get("/appointmentdrug", appointmentdrug.findAll);
routes.post("/appointmentdrug", appointmentdrug.addAppointmentDrug);
routes.get("/appointmentdrug/:id", appointmentdrug.findAppointmentDrug);
routes.put("/appointmentdrug/:id", appointmentdrug.updateAppointmentDrug);
routes.delete("/appointmentdrug/:id", appointmentdrug.deleteAppointmentDrug);

// Routes for AppointmentNote model
routes.get("/appointmentnote", appointmentnote.findAll);
routes.post("/appointmentnote", appointmentnote.addAppointmentNote);
routes.get("/appointmentnote/:id", appointmentnote.findAppointmentNote);
routes.put("/appointmentnote/:id", appointmentnote.updateAppointmentNote);
routes.delete("/appointmentnote/:id", appointmentnote.deleteAppointmentNote);

// Routes for Communication model
routes.get("/communication", communication.findAll);
routes.post("/communication", communication.addCommunication);
routes.get("/communication/:id", communication.findCommunication);
routes.put("/communication/:id", communication.updateCommunication);
routes.delete("/communication/:id", communication.deleteCommunication);

// Routes for CommunicationType model
routes.get("/communicationtype", communicationtype.findAll);
routes.post("/communicationtype", communicationtype.addCommunicationType);
routes.get("/communicationtype/:id", communicationtype.findCommunicationType);
routes.put("/communicationtype/:id", communicationtype.updateCommunicationType);
routes.delete("/communicationtype/:id", communicationtype.deleteCommunicationType);

// Routes for Diagnosis model
routes.get("/diagnosis", diagnosis.findAll);
routes.post("/diagnosis", diagnosis.addDiagnosis);
routes.get("/diagnosis/:id", diagnosis.findDiagnosis);
routes.put("/diagnosis/:id", diagnosis.updateDiagnosis);
routes.delete("/diagnosis/:id", diagnosis.deleteDiagnosis);

// Routes for Document model
routes.get("/document", document.findAll);
routes.post("/document", document.addDocument);
routes.get("/document/:id", document.findDocument);
routes.put("/document/:id", document.updateDocument);
routes.delete("/document/:id", document.deleteDocument);

// Routes for Drug model
routes.get("/drug", drug.findAll);
routes.post("/drug", drug.addDrug);
routes.get("/drug/:id", drug.findDrug);
routes.put("/drug/:id", drug.updateDrug);
routes.delete("/drug/:id", drug.deleteDrug);

// Routes for Notification model
routes.get("/notification", notification.findAll);
routes.post("/notification", notification.addNotification);
routes.get("/notification/:id", notification.findNotification);
routes.put("/notification/:id", notification.updateNotification);
routes.delete("/notification/:id", notification.deleteNotification);

routes.get("/", function(req, res){
    res.sendFile(__dirname + '/src/pages/index.html');
});

routes.get("/form", function(req, res){
    res.sendFile(__dirname + '/src/pages/form.html');
});

export { routes as default };
