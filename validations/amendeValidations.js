import { body } from "express-validator";

const amendeRules = [
  body('date_amende')
    .notEmpty().withMessage('La date amende ne peut pas être vide')
    .matches(/^\d{4}\/\d{2}\/\d{2}$/).withMessage('La date amende doit être au format YYYY/MM/DD'),
    body('montant').notEmpty().withMessage('Le montant ne peut pas etre vide')
];

export default amendeRules;