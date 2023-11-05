import { body } from "express-validator";

const auteurRules=[
    body('nom').notEmpty().withMessage('Le nom ne peut pas etre vide'),
    body('prenom').notEmpty().withMessage('Le prenom ne peut pas etre vide'),
    body('naissance').notEmpty().withMessage('La date de naissance ne peut pas etre vide'),
    body('nationalite').isLength({min:2}).withMessage('La nationalite doit avoir au moins 12 caracteres'),
    body('sexe').notEmpty().withMessage('Le sexe ne peut pas etre vide'),
    body('biographie').notEmpty().withMessage('La biographie ne peut pas etre vide')
]

export default auteurRules