<template>
    <div>
        <!-- <div v-for="department in departments" :key="department.id">
            <Department :department="department" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Date d'amende</td>
                    <td>Montant</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="amende in amendes" :key="amende.id">
                    <td>{{ amende.id }}</td>
                    <td>{{ amende.date_amende }}</td>
                    <td>{{ amende.montant }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeAmende(amende.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-amende/${amende.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouvelle-amende')" class="btn btn-primary">
                Add new amende
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Amende from "./Amende.vue";
import useAmende from "../../services/amendeServices";
import { useRouter } from "vue-router";

const { getAmendeList, deleteAmende } = useAmende();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des auteurs venant de la base de donnee
let amendes = ref([]);

const removeAmende = (id) => {
    //Appel de la route de suppression d'une amende (depuis express)
    deleteAmende(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("Amende supprimée");

            //Lecture de la liste complete depuis express
            getAmendeList()
                .then((res) => {
                    console.log("Les resultats", res);
                    amendes.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des amendes", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression de l'amende", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getAmendeList()
        .then((res) => {
            console.log("Les resultats", res);
            amendes.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des amendes", err))
});
</script>

<style lang="scss" scoped>
</style>