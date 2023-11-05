import { body } from "express-validator";

const livreRules = [
    body('date_publication_livre')
    .notEmpty().withMessage('La date de publication du livre ne peut pas être vide')
    .matches(/^\d{4}\/\d{2}\/\d{2}$/).withMessage('La date de réservation doit être au format YYYY/MM/DD'),
    body('categorie_livre').notEmpty().withMessage('La catégorie du livre ne peut pas etre vide'),
    body('titre').notEmpty().withMessage('Le titre ne peut pas etre vide')
   
];

export default livreRules;