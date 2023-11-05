//Importer la base de donnee pour creer les modeles
import database from "../connexion.js";
import { DataTypes } from 'sequelize'

//Modele de la table auteur
const Auteur = database.define('Auteur', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    naissance: { type: DataTypes.DATEONLY },
    nationalite: { type: DataTypes.STRING, allowNull: false },
    sexe: { type: DataTypes.STRING, allowNull: false },
    biographie: { type: DataTypes.STRING, allowNull: false }
    

},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })


export default Auteur