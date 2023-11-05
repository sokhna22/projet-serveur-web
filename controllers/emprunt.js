import Emprunt from "../models/Emprunt.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les emprunt
export const getAllEmprunt = async (req, res) => {


    try {
        const result = await Emprunt.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addEmprunt = async (req, res) => {
    const { date_emprunt,date_retour_prevu, date_retour_effectif,status } = req.body
    const emprunt = { date_emprunt,date_retour_prevu, date_retour_effectif,status }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Emprunt.create(emprunt)
        res.status(200).json({ data: result, message: "Emprunt ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getEmpruntById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Emprunt Id is required' })

    try {
        const result = await Emprunt.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateEmprunt = async (req, res) => {
    let { id } = req.params
    const updatedEmprunt = { date_emprunt: req.body.date_emprunt, date_retour_prevu: req.body.date_retour_prevu, date_retour_effectif: req.body.date_retour_effectif,status: req.body.status }

    if (!id) res.status(400).json({ message: 'Emprunt Id is required' })
    try {
        const result = await Emprunt.update(updatedEmprunt, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteEmprunt = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id de L'emprunt est requis" })
    try {
        const result = await Emprunt.destroy({ where: { id } })
        res.status(200).json({ message: `L'Emprunt ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}