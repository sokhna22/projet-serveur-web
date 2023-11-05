import { body } from "express-validator";

const rayonRules=[
    body('nom').notEmpty().withMessage('Le nom ne peut pas etre vide')
]

export default rayonRules