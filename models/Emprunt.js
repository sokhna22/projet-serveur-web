//Importer la base de donnee pour creer les modeles
import database from "../connexion.js";

import { DataTypes } from 'sequelize'

//Modele de la table Emprunt
const Emprunt = database.define('Emprunt', {
   
    date_emprunt: { type: DataTypes.DATEONLY },
    date_retour_prevu: { type: DataTypes.DATEONLY},
    date_retour_effectif: { type: DataTypes.DATEONLY },
    status: { type: DataTypes.STRING, allowNull: false }
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default Emprunt


  