//Importer la base de donnee pour creer les modeles
import database from "../connexion.js";
import { DataTypes } from 'sequelize'

//Modele de la table amende
const Amende = database.define('Amende', {
    date_amende: { type: DataTypes.DATEONLY },
    montant: { type: DataTypes.STRING, allowNull: false }
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })


export default Amende