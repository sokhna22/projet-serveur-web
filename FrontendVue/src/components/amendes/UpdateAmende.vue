<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'une amende</h3>

            <form @submit.prevent="updateAAmende">
                <div class="mb-3">
                    <label for="date_amende" class="form-label">Date d'amende</label>
                    <input
                        v-model="amende.date_amende"
                        type="date"
                        class="form-control"
                        id="date_amende"
                        placeholder="Entrer la date d'amende"
                    />
                </div>

                <div class="mb-3">
                    <label for="montant" class="form-label"
                        >Montant</label
                    >
                    <input
                        v-model="amende.montant"
                        type="text"
                        class="form-control"
                        id="montant"
                        placeholder="Entrer le montant de l'amende"
                    />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useAmende from "../../services/amendeServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateAmende, getAmendeById } = useAmende();
let amende = ref({
    date_amende: "",
    montant: "",
    
});

function updateAAmende() {
    updateAmende(id, amende.value)
        .then((res) => {
            console.log("Amende mise a jour", res);
            router.push("/amende")
        .catch((err) =>console.log("Erreur lors de la mise a jour de l'amende", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
    if (id) {
        getAmendeById(id)
            .then((res) => {amende.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de l'amende", err))
    }
})
</script>

<style lang="scss" scoped>
</style>