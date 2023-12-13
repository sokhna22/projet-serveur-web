<template>
    <div>
        <!-- <div v-for="department in departments" :key="department.id">
            <Department :department="department" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Nom du rayon</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="rayon in rayons" :key="rayon.id">
                    <td>{{ rayon.id }}</td>
                    <td>{{ rayon.nom }}</td>
                    
                    <td>
                        <button class="btn btn-danger" @click="removeRayon(rayon.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-rayon/${rayon.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-rayon')" class="btn btn-primary">
                Add new rayon
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Rayon from "./Rayon.vue"
import useRayon from "../../services/rayonServices";
import { useRouter } from "vue-router";

const { getRayonList, deleteRayon } = useRayon();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let rayons = ref([]);

const removeRayon = (id) => {
    //Appel de la route de suppression d'un rayon (depuis express)
    deleteRayon(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("Rayon supprime");

            //Lecture de la liste complete depuis express
            getRayonList()
                .then((res) => {
                    console.log("Les resultats", res);
                    rayons.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des rayons", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du rayon", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getRayonList()
        .then((res) => {
            console.log("Les resultats", res);
            rayons.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des rayons", err))
});
</script>

<style lang="scss" scoped>
</style>