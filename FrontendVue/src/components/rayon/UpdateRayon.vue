<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un rayon</h3>

            <form @submit.prevent="updateARayon">
                <div class="mb-3">
                    <label for="nom_rayon" class="form-label">Nom du rayon</label>
                    <input
                        v-model="rayon.nom"
                        type="text"
                        class="form-control"
                        id="nom_rayon"
                        placeholder="Entrer le nom du rayon"
                    />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useRayon from "../../services/rayonServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateRayon, getRayonById } = useRayon();
let rayon = ref({
    nom: "",
    
});

function updateARayon() {
    updateRayon(id,rayon.value)
        .then((res) => {
            console.log("Rayon mis a jour", res);
            router.push("/rayon")
        .catch((err) =>console.log("Erreur lors de la mise a jour du rayon", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du rayon avant l'affichage a l'ecran
    if (id) {
        getRayonById(id)
            .then((res) => {rayon.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture du rayon", err))
    }
})
</script>

<style lang="scss" scoped>
</style>