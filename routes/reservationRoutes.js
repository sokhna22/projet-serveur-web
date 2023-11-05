import { getAllReservation, addReservation, getResevationById, updateReservation, deleteReservation } from '../controllers/reservation.js'
import { Router } from 'express'
import reservationRules from '../validations/reservationValidations.js'
import passport from 'passport'
import { verifierToken, isAdmin, isAdmin2 } from '../auth/autorisations.js'

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), verifierToken, isAdmin, getAllReservation)
    .post('/', reservationRules, addReservation)
    .get('/:id', getResevationById)
    .put('/:id', updateReservation)
    .delete('/:id', deleteReservation)

export default router