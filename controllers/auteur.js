import Auteur from "../models/Auteur.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les auteur
export const getAllAuteur = async (req, res) => {


    try {
        const result = await Auteur.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addAuteur = async (req, res) => {
    const { nom,prenom,naissance,nationalite,sexe,biographie } = req.body
    const auteur = { nom,prenom,naissance,nationalite,sexe,biographie }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Auteur.create(auteur)
        res.status(200).json({ data: result, message: "Auteur ajouté avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getAuteurById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Auteur Id is required' })

    try {
        const result = await Auteur.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateAuteur = async (req, res) => {
    let { id } = req.params
    const updatedAuteur = { nom: req.body.nom, prenom: req.body.prenom, naissance: req.body.naissance,nationalite: req.body.nationalite,sexe: req.body.sexe,biographie: req.body.biographie }

    if (!id) res.status(400).json({ message: 'Auteur Id is required' })
    try {
        const result = await Auteur.update(updatedAuteur, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteAuteur = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id de l'auteur est requis" })
    try {
        const result = await Auteur.destroy({ where: { id } })
        res.status(200).json({ message: `L'auteur ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}