import { getAllLivre, addLivre, getLivreById, updateLivre, deleteLivre } from '../controllers/livre.js'
import { Router } from 'express'
import livreRules from '../validations/livreValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllLivre)
    .post('/', livreRules, addLivre)
    .get('/:id', getLivreById)
    .put('/:id', updateLivre)
    .delete('/:id', deleteLivre)

export default router