import Reservation from "../models/Reservation.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les departments
export const getAllReservation = async (req, res) => {


    try {
        const result = await Reservation.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addReservation = async (req, res) => {
    const {date_reservation, date_expiration, status_reservation }= req.body
    const reservation = {date_reservation, date_expiration, status_reservation }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Reservation.create(reservation)
        res.status(200).json({ data: result, message: "Reservation ajoutée avec succés" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getResevationById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Reservation Id est nécessaire' })

    try {
        const result = await Reservation.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateReservation = async (req, res) => {
    let { id } = req.params
    const updatedReservation = { date_reservation: req.body.date_reservation, date_expiration: req.body.date_expiration, status_reservation: req.body.status_reservation }

    if (!id) res.status(400).json({ message: 'Reservation Id est nécessaire' })
    try {
        const result = await Reservation.update(updatedReservation, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteReservation = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id du reservation est requis" })
    try {
        const result = await Reservation.destroy({ where: { id } })
        res.status(200).json({ message: `La reservation ${id} a ete supprimée avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}