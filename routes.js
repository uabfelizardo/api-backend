import express from "express";
import usertype from "./src/controllers/usertypeController.js";
import user from "./src/controllers/userController.js";
import appointment from "./src/controllers/appointmentController.js";
import appointmentdrug from "./src/controllers/appointmentdrugController.js";
import appointmentnote from "./src/controllers/appointmentnoteController.js";
import communication from "./src/controllers/communicationController.js";
import communicationtype from "./src/controllers/communicationtypeController.js";
import diagnosis from "./src/controllers/diagnosisController.js";
import document from "./src/controllers/documentController.js";
import drug from "./src/controllers/drugController.js";
import notification from "./src/controllers/notificationController.js";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = express.Router();

// Routes for usertyp model
routes.get("/usertype", usertype.findAll);
routes.post("/usertype", usertype.addUserType);
routes.get("/usertype/:id", usertype.findUserType);
routes.put("/usertype/:id", usertype.updateUserType);
routes.delete("/usertype/:id", usertype.deleteUserType);

// Routes for user model
routes.get("/user", user.findAll);
routes.post("/user", user.addUser);
routes.get("/user/:id", user.findUser);
routes.put("/user/:id", user.updateUser);
routes.delete("/user/:id", user.deleteUser);

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
