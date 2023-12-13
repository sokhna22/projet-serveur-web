<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'une reservation</h3>

            <form @submit.prevent="updateARerservation">
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
                    <label for="date_d'expiration" class="form-label"
                        >Date d'expiration</label
                    >
                    <input
                        v-model="reservation.date_expiration"
                        type="date"
                        class="form-control"
                        id="date_d'expiration"
                        placeholder="Entrer la date d'expiration"
                    />
                </div>
                <div class="mb-3">
                    <label for="status_reservation" class="form-label"
                        >Status de reservation</label
                    >
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
import { onBeforeMount, ref } from "vue";
import useReservation from "../../services/reservationServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateReservation, getReservationById } = useReservation();
let reservation = ref({
    date_reservation: "",
    date_expiration: "",
    status_reservation: "",
});

function updateARerservation() {
    updateReservation(id,reservation.value)
        .then((res) => {
            console.log("Reservation mise a jour", res);
            router.push("/livre")
        .catch((err) =>console.log("Erreur lors de la mise a jour du reservation", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
    if (id) {
        getReservationById(id)
            .then((res) => {reservation.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de la reservation", err))
    }
})
</script>

<style lang="scss" scoped>
</style>