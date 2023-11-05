import { body } from "express-validator";

const reservationRules = [
  body('date_reservation')
    .notEmpty().withMessage('La date de réservation ne peut pas être vide')
    .matches(/^\d{4}\/\d{2}\/\d{2}$/).withMessage('La date de réservation doit être au format YYYY/MM/DD'),
  body('date_expiration')
    .isLength({ min: 10 }).withMessage('La date d\'expiration doit être au format YYYY/MM/DD')
    .matches(/^\d{4}\/\d{2}\/\d{2}$/).withMessage('La date d\'expiration doit être au format YYYY/MM/DD'),
    body('status_reservation').notEmpty().withMessage('Le status ne peut pas etre vide')
];

export default reservationRules;