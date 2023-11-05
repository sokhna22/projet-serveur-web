import { getAllEditeur, addEditeur, updateEditeur, deleteEditeur, getEditeurById } from '../controllers/editeur.js'
import { Router } from 'express'
import editeurRules from '../validations/editeurValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllEditeur)
    .post('/', editeurRules, addEditeur)
    .get('/:id', getEditeurById)
    .put('/:id', updateEditeur)
    .delete('/:id', deleteEditeur)

export default router