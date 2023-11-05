import { getAllEmprunt, addEmprunt, getEmpruntById, updateEmprunt, deleteEmprunt } from '../controllers/emprunt.js'
import { Router } from 'express'
import empruntRules from '../validations/empruntValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllEmprunt)
    .post('/', empruntRules, addEmprunt)
    .get('/:id', getEmpruntById)
    .put('/:id', updateEmprunt)
    .delete('/:id', deleteEmprunt)

export default router