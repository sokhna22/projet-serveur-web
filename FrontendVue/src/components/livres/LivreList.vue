<template>
    <div>
        <!-- <div v-for="department in departments" :key="department.id">
            <Department :department="department" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Titre</td>
                    <td>Date de publication </td>
                    <td>Categorie du livre</td>
                    <td>Nombre d'exemplaire total</td>
                    <td>Nombre d'exemplaire</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="livre in livres" :key="livre.id">
                    <td>{{ livre.id }}</td>
                    <td>{{ livre.titre }}</td>
                    <td>{{ livre.categorie_livre }}</td>
                    <td>{{ livre.nombre_exemplaire_total }}</td>
                    <td>{{ livre.nombre_exemplaire }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeLivre(livre.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-livre/${livre.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-livre')" class="btn btn-primary">
                Add new livre
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Livre from "./Livre.vue";
import useLivre from "../../services/livreServices";
import { useRouter } from "vue-router";

const { getLivreList, deleteLivre } = useLivre();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let livres = ref([]);

const removeLivre = (id) => {
    //Appel de la route de suppression d'un departement (depuis express)
    deleteLivre(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("Livre supprime");

            //Lecture de la liste complete depuis express
            getLivreList()
                .then((res) => {
                    console.log("Les resultats", res);
                    livres.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des livres", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du livre", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getLivreList()
        .then((res) => {
            console.log("Les resultats", res);
            livres.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des livres", err))
});
</script>

<style lang="scss" scoped>
</style>