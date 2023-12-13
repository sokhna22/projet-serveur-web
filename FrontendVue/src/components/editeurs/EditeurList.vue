<template>
    <div>
        <!-- <div v-for="department in departments" :key="department.id">
            <Department :department="department" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Nom</td>
                    <td>Adresse</td>
                    <td>Telephone</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="editeur in editeurs" :key="editeur.id">
                    <td>{{ editeur.id }}</td>
                    <td>{{ editeur.nom }}</td>
                    <td>{{ editeur.adresse }}</td>
                    <td>{{ editeur.telephone }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeEditeur(editeur.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-editeur/${editeur.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-editeur')" class="btn btn-primary">
                Add new editeur
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Editeur from "./Editeur.vue";
import useEditeur from "../../services/editeurServices";
import { useRouter } from "vue-router";

const { getEditeurList, deleteEditeur } = useEditeur();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let editeurs = ref([]);

const removeEditeur = (id) => {
    //Appel de la route de suppression d'un departement (depuis express)
    deleteEditeur(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("Editeur supprime");

            //Lecture de la liste complete depuis express
            getEditeurList()
                .then((res) => {
                    console.log("Les resultats", res);
                    editeurs.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des editeurs", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression de l'editeur", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getEditeurList()
        .then((res) => {
            console.log("Les resultats", res);
            editeurs.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des editeurs", err))
});
</script>

<style lang="scss" scoped>
</style>