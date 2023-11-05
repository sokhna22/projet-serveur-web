import { getAllAmende, addAmende, getAmendeById, updateAmende, deleteAmende } from '../controllers/amende.js'
import { Router } from 'express'
import amendeRules from '../validations/amendeValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllAmende)
    .post('/', amendeRules, addAmende)
    .get('/:id', getAmendeById)
    .put('/:id', updateAmende)
    .delete('/:id', deleteAmende)

export default router