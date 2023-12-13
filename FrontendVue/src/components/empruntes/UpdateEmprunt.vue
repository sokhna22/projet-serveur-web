<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un emprunt</h3>

            <form @submit.prevent="updateAEmprunt">
                <div class="mb-3">
                    <label for="date_emprunt" class="form-label">Date d'emprunt</label>
                    <input
                        v-model="emprunt.date_emprunt"
                        type="date"
                        class="form-control"
                        id="date_emprunt"
                        placeholder="Entrer la date d'emprunt"
                    />
                </div>

                <div class="mb-3">
                    <label for="date_retour_prevu" class="form-label"
                        >Date de retour prevu</label
                    >
                    <input
                        v-model="emprunt.date_retour_prevu"
                        type="date"
                        class="form-control"
                        id="date_retour_prevu"
                        placeholder="Entrer une date de retour prevue"
                    />
                </div>
                <div class="mb-3">
                    <label for="date_retour_effectif" class="form-label"
                        >Date de retour effectif</label
                    >
                    <input
                        v-model="emprunt.date_retour_effectif"
                        type="date"
                        class="form-control"
                        id="date_retour_effectif"
                        placeholder="Donner la date de retour effectif"
                    />
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label"
                        >Status</label
                    >
                    <input
                        v-model="emprunt.status"
                        type="text"
                        class="form-control"
                        id="text"
                        placeholder="Entrer le status"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useEmprunt from "../../services/empruntServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateEmprunt, getEmpruntById } = useEmprunt();
let emprunt = ref({
    date_emprunt: "",
    date_retour_prevu: "",
    date_retour_effectif: "",
    status: "",
});

function updateAEmprunt() {
    updateEmprunt(id,emprunt.value)
        .then((res) => {
            console.log("Emprunt mis a jour", res);
            router.push("/emprunt")
        .catch((err) =>console.log("Erreur lors de la mise a jour de l'emprunt", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes de l'emprunt avant l'affichage a l'ecran
    if (id) {
        getEmpruntById(id)
            .then((res) => {emprunt.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de l'emprunt", err))
    }
})
</script>

<style lang="scss" scoped>
</style>