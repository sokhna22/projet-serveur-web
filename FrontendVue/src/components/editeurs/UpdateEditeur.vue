<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un editeur</h3>

            <form @submit.prevent="updateAEditeur">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input
                        v-model="editeur.nom"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer le nom de l'editeur"
                    />
                </div>

                <div class="mb-3">
                    <label for="adresse" class="form-label"
                        >Adresse</label
                    >
                    <input
                        v-model="editeur.adresse"
                        type="text"
                        class="form-control"
                        id="adresse"
                        placeholder="Entrer une adresse de l'editeur"
                    />
                </div>
                <div class="mb-3">
                    <label for="telephone" class="form-label"
                        >Telephone</label
                    >
                    <input
                        v-model="editeur.telephone"
                        type="text"
                        class="form-control"
                        id="telephone"
                        placeholder="Entrer le  numero de telephone de l'editeur"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useEditeur from "../../services/editeurServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateEditeur, getEditeurById } = useEditeur();
let editeur = ref({
    nom: "",
    adresse: "",
    telephone: "",
});

function updateAEditeur() {
    updateEditeur(id,editeur.value)
        .then((res) => {
            console.log("Editeur mis a jour", res);
            router.push("/editeur")
        .catch((err) =>console.log("Erreur lors de la mise a jour de l'editeur", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
    if (id) {
        getEditeurById(id)
            .then((res) => {editeur.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture de l'editeur", err))
    }
})
</script>

<style lang="scss" scoped>
</style>