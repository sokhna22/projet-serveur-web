import Amende from "../models/Amende.js"
import { validationResult } from "express-validator"

//Chercher la liste de toutes les amendes
export const getAllAmende = async (req, res) => {


    try {
        const result = await Amende.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addAmende = async (req, res) => {
    const { date_amende,montant }  = req.body
    const amende = { date_amende,montant } 

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Amende.create(amende)
        res.status(200).json({ data: result, message: "Amende ajoutée avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getAmendeById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Amende Id is required' })

    try {
        const result = await Amende.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateAmende = async (req, res) => {
    let { id } = req.params
    const updatedAmende = { date_amende: req.body.date_amende, montant: req.body.montant}

    if (!id) res.status(400).json({ message: 'Amende Id is required' })
    try {
        const result = await Amende.update(updatedAmende, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteAmende = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id de l'amende est requis" })
    try {
        const result = await Amende.destroy({ where: { id } })
        res.status(200).json({ message: `L'amende ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}