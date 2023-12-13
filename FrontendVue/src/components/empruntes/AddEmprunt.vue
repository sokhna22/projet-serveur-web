<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau emprunt</h3>

            <form @submit.prevent="addNewEmprunt">
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
                        placeholder="Entrer la date de retour prevu"
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
                        placeholder="Entrer la date de retour effective"
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
                        id="status"
                        placeholder="Donner le status"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useEmprunt from "../../services/empruntServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addEmprunt } = useEmprunt();
let emprunt = ref({
    date_emprunt: "",
    date_retour_prevu: "",
    date_retour_effectif: "",
    status: "",
});
function addNewEmprunt() {
    //Appel de notre route dans le backend (express) pour ajouter un departement
    addEmprunt(emprunt.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau emprunt", res);
            //On va etre redirige vers la table des emprunts
            router.push("/emprunt");
        })
        .catch((err) => console.log("Erreur lors de l'ajout de l'emprunt", err));
}
</script>

<style lang="scss" scoped>
</style>