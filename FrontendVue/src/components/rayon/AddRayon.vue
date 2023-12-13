<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau rayon</h3>

            <form @submit.prevent="addNewRayon">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom du rayon</label>
                    <input
                        v-model="rayon.nom"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer le nom du rayon"
                    />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useRayon from "../../services/rayonServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addRayon } = useRayon();
let rayon = ref({
    nom: "",
    
});
function addNewRayon() {
    //Appel de notre route dans le backend (express) pour ajouter un rayon
    addRayon(rayon.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau rayon", res);
            //On va etre redirige vers la table des rayon
            router.push("/rayon");
        })
        .catch((err) => console.log("Erreur lors de l'ajout du rayon", err));
}
</script>

<style lang="scss" scoped>
</style>