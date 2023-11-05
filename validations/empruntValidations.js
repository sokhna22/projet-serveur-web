import { body } from "express-validator";

const empruntRules=[
    body('date_emprunt')
        .notEmpty().withMessage('La date de réservation ne peut pas être vide')
        .matches(/^\d{4}\/\d{2}\/\d{2}$/).withMessage('La date d,emprunt doit être au format YYYY/MM/DD'),
    body('date_retour_prevu')
        .isLength({ min: 10 }).withMessage('La date de retour prevu doit être au format YYYY/MM/DD')
        .matches(/^\d{4}\/\d{2}\/\d{2}$/).withMessage('La date de retour prevu doit être au format YYYY/MM/DD'),
    body('date_retour_effectif')
        .isLength({ min: 10 }).withMessage('La date date de retour effective doit être au format YYYY/MM/DD')
        .matches(/^\d{4}\/\d{2}\/\d{2}$/).withMessage('La date date de retour effective doit être au format YYYY/MM/DD')
    
]

export default empruntRules