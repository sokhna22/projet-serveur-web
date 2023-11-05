import { getAllRayon, addRayon, getRayonById, updateRayon, deleteRayon } from '../controllers/rayon.js'
import { Router } from 'express'
import rayonRules from '../validations/rayonValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllRayon)
    .post('/', rayonRules, addRayon)
    .get('/:id', getRayonById)
    .put('/:id', updateRayon)
    .delete('/:id', deleteRayon)

export default router