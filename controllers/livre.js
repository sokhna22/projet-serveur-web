import Livre from "../models/Livre.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les departments
export const getAllLivre = async (req, res) => {


    try {
        const result = await Livre.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addLivre = async (req, res) => {
    const { titre,date_publication_livre,categorie_livre,nombre_exemplaire_total,nombre_exemplaire } = req.body
    const livre = { titre,date_publication_livre,categorie_livre,nombre_exemplaire_total,nombre_exemplaire }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Livre.create(livre)
        res.status(200).json({ data: result, message: "Livre ajoute avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getLivreById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Livre Id is required' })

    try {
        const result = await Livre.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateLivre = async (req, res) => {
    let { id } = req.params
    const updatedLivre= { titre: req.body.titre, date_publication_livre: req.body.date_publication_livre, categorie_livre: req.body.categorie_livre,nombre_exemplaire_total: req.body.nombre_exemplaire_total,nombre_exemplaire: req.body.nombre_exemplaire }

    if (!id) res.status(400).json({ message: 'Livre Id is required' })
    try {
        const result = await Livre.update(updatedLivre, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteLivre = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id du livre est requis" })
    try {
        const result = await Livre.destroy({ where: { id } })
        res.status(200).json({ message: `Le livre ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}