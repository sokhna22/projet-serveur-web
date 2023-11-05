import { getAllAuteur, addAuteur, getAuteurById, updateAuteur, deleteAuteur } from '../controllers/auteur.js'
import { Router } from 'express'
import auteurRules from '../validations/auteurValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllAuteur)
    .post('/', auteurRules, addAuteur)
    .get('/:id', getAuteurById)
    .put('/:id', updateAuteur)
    .delete('/:id', deleteAuteur)

export default router