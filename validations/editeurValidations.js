import { body } from "express-validator";

const editeurRules=[
    body('nom').notEmpty().withMessage('Le nom ne peut pas etre vide'),
    body('adresse').isLength({min:10}).withMessage('adresse doit avoir au moins 10 caracteres'),
    body('telephone').isLength({min:12}).withMessage('Le numero de telephone doit avoir au moins 12 caracteres')

]

export default editeurRules