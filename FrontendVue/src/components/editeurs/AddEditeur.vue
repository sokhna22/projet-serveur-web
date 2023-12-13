<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau editeur</h3>

            <form @submit.prevent="addNewEditeur">
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
                        placeholder="Entrer le numero de telephone"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useEditeur from "../../services/editeurServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addEditeur } = useEditeur();
let editeur = ref({
    nom: "",
    adresse: "",
    telephone: "",
});
function addNewEditeur() {
    //Appel de notre route dans le backend (express) pour ajouter un departement
    addEditeur(editeur.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau editeur", res);
            //On va etre redirige vers la table des departements
            router.push("/editeur");
        })
        .catch((err) => console.log("Erreur lors de l'ajout d'un editeur", err));
}
</script>

<style lang="scss" scoped>
</style>