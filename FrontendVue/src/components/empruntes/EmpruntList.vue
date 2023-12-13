<template>
    <div>
        <!-- <div v-for="department in departments" :key="department.id">
            <Department :department="department" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Date d'emprunt</td>
                    <td>Date de retour prevu</td>
                    <td>Date de retour effectif</td>
                    <td>Status</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emprunt in emprunts" :key="emprunt.id">
                    <td>{{ emprunt.id }}</td>
                    <td>{{ emprunt.date_emprunt }}</td>
                    <td>{{ emprunt.date_retour_prevu }}</td>
                    <td>{{ emprunt.date_retour_effectif }}</td>
                    <td>{{ emprunt.status }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeEmprunt(emprunt.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-emprunt/${emprunt.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-emprunt')" class="btn btn-primary">
                Add new emprunt
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Emprunt from "./Emprunt.vue";
import useEmprunt from "../../services/empruntServices";
import { useRouter } from "vue-router";

const { getEmpruntList, deleteEmprunt } = useEmprunt();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des emprunts venant de la base de donnee
let emprunts = ref([]);

const removeEmprunt = (id) => {
    //Appel de la route de suppression d'un emprunt (depuis express)
    deleteEmprunt(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des emprunts pour raffraichir l'ecran
            console.log("Emprunt supprime");

            //Lecture de la liste complete depuis express
            getEmpruntList()
                .then((res) => {
                    console.log("Les resultats", res);
                    emprunts.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des emprunts", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression de l'emprunt", err)
        );
};

// Cette fonction permet de charger la liste des emprunts avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des emprunts depuis le backend (express)
    getEmpruntList()
        .then((res) => {
            console.log("Les resultats", res);
            emprunts.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des emprunts", err))
});
</script>

<style lang="scss" scoped>
</style>