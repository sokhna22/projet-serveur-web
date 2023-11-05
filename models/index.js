import User from "./User.js";
import Role from "./Role.js";
import Reservation from "./Reservation.js";
import Livre from "./Livre.js";
import Emprunt from "./Emprunt.js";
import Editeur from "./Editeur.js";
import Departement from "./Department.js";
import Auteur from "./Auteur.js";
import Amende from "./Amende.js";
import Rayon from "./Rayon.js";

//Les relations
User.belongsToMany(Role,{through:'UserRole'})
Role.belongsToMany(User,{through:'UserRole'})

// Relation entre Livre et Emprunt : Un livre peut être emprunté plusieurs fois
Livre.hasMany(Emprunt, { foreignKey: 'id_livre' });
Emprunt.belongsTo(Livre, { foreignKey: 'id_livre' });

// Relation entre Utilisateur et Emprunt : Un utilisateur peut emprunter plusieurs livres
User.hasMany(Emprunt, { foreignKey: 'id_utilisateur' });
Emprunt.belongsTo(User, { foreignKey: 'id_utilisateur' });

// Relation entre Utilisateur et Reservation : Un utilisateur peut faire plusieurs réservations
User.hasMany(Reservation, { foreignKey: 'id_utilisateur' });
Reservation.belongsTo(User, { foreignKey: 'id_utilisateur' });

// Relation entre Livre et Reservation : Un livre peut être réservé plusieurs fois
Livre.hasMany(Reservation, { foreignKey: 'id_livre' });
Reservation.belongsTo(Livre, { foreignKey: 'id_livre' });

// Relation entre Auteur et Livre : Un auteur peut écrire plusieurs livres
Auteur.hasMany(Livre, { foreignKey: 'id_auteur' });
Livre.belongsTo(Auteur, { foreignKey: 'id_auteur' });

// Relation entre Editeur et Livre : Un éditeur peut publier plusieurs livres
Editeur.hasMany(Livre, { foreignKey: 'id_editeur' });
Livre.belongsTo(Editeur, { foreignKey: 'id_editeur' });

// Relation entre Rayon et Livre : Un rayon peut contenir plusieurs livres
Rayon.hasMany(Livre, { foreignKey: 'id_rayon' });
Livre.belongsTo(Rayon, { foreignKey: 'id_rayon' });

// Relation entre Departement et Rayon : Un département peut avoir plusieurs rayons
Departement.hasMany(Rayon, { foreignKey: 'id_departement' });
Rayon.belongsTo(Departement, { foreignKey: 'id_departement' });

// Relation entre Emprunt et Amende : Un emprunt peut générer plusieurs amendes
Emprunt.hasMany(Amende, { foreignKey: 'id_emprunt' });
Amende.belongsTo(Emprunt, { foreignKey: 'id_emprunt' });


export {Departement, User, Role,Reservation, Livre, Emprunt, Editeur,Rayon,Auteur,Amende};