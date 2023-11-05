import Editeur from "../models/Editeur.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les editeurs
export const getAllEditeur = async (req, res) => {


    try {
        const result = await Editeur.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addEditeur = async (req, res) => {
    const { nom,adresse,telephone } = req.body
    const editeur = { nom,adresse,telephone }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Editeur.create(editeur)
        res.status(200).json({ data: result, message: "Editeur ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getEditeurById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Editeur Id is required' })

    try {
        const result = await Editeur.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateEditeur = async (req, res) => {
    let { id } = req.params
    const updatedEditeur = { nom: req.body.nom, adresse: req.body.adresse, telephone: req.body.telephone }

    if (!id) res.status(400).json({ message: 'Editeur Id is required' })
    try {
        const result = await Editeur.update(updatedEditeur, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteEditeur = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id de l'editeur est requis" })
    try {
        const result = await Editeur.destroy({ where: { id } })
        res.status(200).json({ message: `L'editeur ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}