<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau livre</h3>

            <form @submit.prevent="addNewLivre">
                <div class="mb-3">
                    <label for="titre" class="form-label">Titre</label>
                    <input
                        v-model="livre.titre"
                        type="text"
                        class="form-control"
                        id="titre"
                        placeholder="Entrer le titre du livre"
                    />
                </div>
                <div class="mb-3">
                    <label for="date_publication_livre" class="form-label">Date de publication</label>
                    <input
                        v-model="livre.date_publication_livre"
                        type="date"
                        class="form-control"
                        id="date_publication_livre"
                        placeholder="Entrer la date de publication du livre"
                    />
                </div>
                <div class="mb-3">
                    <label for="categorie_livre" class="form-label">Categorie du livre</label>
                    <input
                        v-model="livre.categorie_livre"
                        type="text"
                        class="form-control"
                        id="categorie_livre"
                        placeholder="Entrer la categorie du livre"
                    />
                </div>
                <div class="mb-3">
                    <label for="nombre_exemplaire_total" class="form-label">Nombre d'exemplaire total</label>
                    <input
                        v-model="livre.nombre_exemplaire_total"
                        type="text"
                        class="form-control"
                        id="nombre_exemplaire_total"
                        placeholder="Entrer le nombre d'exemplaire total du livre"
                    />
                </div>
                <div class="mb-3">
                    <label for="nombre_exemplaire" class="form-label">Nombre d'exemplaire </label>
                    <input
                        v-model="livre.nombre_exemplaire"
                        type="text"
                        class="form-control"
                        id="nombre_exemplaire"
                        placeholder="Entrer le nombre d'exemplaire  du livre"
                    />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useLivre from "../../services/livreServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addLivre } = useLivre();
let livre = ref({
    titre: "",
    date_publication_livre: "",
    categorie_livre: "",
    nombre_exemplaire_total:"",
    nombre_exemplaire:"",
    
});
function addNewLivre() {
    //Appel de notre route dans le backend (express) pour ajouter un rayon
    addLivre(livre.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau livre", res);
            //On va etre redirige vers la table des rayon
            router.push("/livre");
        })
        .catch((err) => console.log("Erreur lors de l'ajout du livre", err));
}
</script>

<style lang="scss" scoped>
</style>