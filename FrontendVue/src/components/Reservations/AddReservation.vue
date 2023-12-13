<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'une nouvelle reservation</h3>

            <form @submit.prevent="addNewReservation">
                <div class="mb-3">
                    <label for="date_reservation" class="form-label">Date de reservation</label>
                    <input
                        v-model="reservation.date_reservation"
                        type="date"
                        class="form-control"
                        id="date_reservation"
                        placeholder="Entrer la date de reservation"
                    />
                </div>
                <div class="mb-3">
                    <label for="date_expiration" class="form-label">Date d'expiration</label>
                    <input
                        v-model="reservation.date_expiration"
                        type="date"
                        class="form-control"
                        id="date_expiration"
                        placeholder="Entrer la date d'expiration"
                    />
                </div>
                <div class="mb-3">
                    <label for="status_reservation" class="form-label">Status de reservation</label>
                    <input
                        v-model="reservation.status_reservation"
                        type="text"
                        class="form-control"
                        id="status_reservation"
                        placeholder="Entrer le status de reservation"
                    />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useReservation from "../../services/reservationServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addReservation } = useReservation();
let reservation = ref({
    date_reservation: "",
    date_expiration: "",
    status_reservation: "",
    
});
function addNewReservation() {
    //Appel de notre route dans le backend (express) pour ajouter un rayon
    addReservation(reservation.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouvelle reservation", res);
            //On va etre redirige vers la table des rayon
            router.push("/livre");
        })
        .catch((err) => console.log("Erreur lors de l'ajout du reservation", err));
}
</script>

<style lang="scss" scoped>
</style>