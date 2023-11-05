import Rayon from "../models/Rayon.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les rayons
export const getAllRayon = async (req, res) => {


    try {
        const result = await Rayon.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addRayon = async (req, res) => {
    const { nom } = req.body
    const rayon = { nom}

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Rayon.create(rayon)
        res.status(200).json({ data: result, message: "Rayon ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getRayonById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Rayon Id is required' })

    try {
        const result = await Rayon.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateRayon = async (req, res) => {
    let { id } = req.params
    const updatedRayon = { nom: req.body.nom }

    if (!id) res.status(400).json({ message: 'Rayon Id is required' })
    try {
        const result = await Rayon.update(updatedRayon, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteRayon = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id du rayon est requis" })
    try {
        const result = await Rayon.destroy({ where: { id } })
        res.status(200).json({ message: `Le rayon ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}