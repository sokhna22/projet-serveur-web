<template>
    <div>
        <!-- <div v-for="department in departments" :key="department.id">
            <Department :department="department" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Date de reservation</td>
                    <td>Date d'expiration</td>
                    <td>Status de reservation</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="reservation in reservations" :key="reservation.id">
                    <td>{{ reservation.id }}</td>
                    <td>{{ reservation.date_reservation }}</td>
                    <td>{{ reservation.date_expiration }}</td>
                    <td>{{ reservation.status_reservation }}</td>
                    
                    <td>
                        <button class="btn btn-danger" @click="removeReservation(reservation.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-reservation/${reservation.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouvelle-reservation')" class="btn btn-primary">
                Add new reservation
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Reservation from "./Reservation.vue"
import useReservation from "../../services/reservationServices";
import { useRouter } from "vue-router";

const { getReservationList, deleteReservation } = useReservation();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let reservations = ref([]);

const removeReservation = (id) => {
    //Appel de la route de suppression d'un rayon (depuis express)
    deleteReservation(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("Reservation supprimée");

            //Lecture de la liste complete depuis express
            getReservationList()
                .then((res) => {
                    console.log("Les resultats", res);
                    reservations.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des reservations", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression de la reservation", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getReservationList()
        .then((res) => {
            console.log("Les resultats", res);
            reservations.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des reservations", err))
});
</script>

<style lang="scss" scoped>
</style>