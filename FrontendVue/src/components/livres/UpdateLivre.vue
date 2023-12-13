<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un livre</h3>

            <form @submit.prevent="updateALivre">
                <div class="mb-3">
                    <label for="titre" class="form-label">Titre</label>
                    <input
                        v-model="livre.titre"
                        type="text"
                        class="form-control"
                        id="titre"
                        placeholder="Entrer le titre"
                    />
                </div>

                <div class="mb-3">
                    <label for="date_publication_livre" class="form-label"
                        >Date de publication</label
                    >
                    <input
                        v-model="livre.date_publication_livre"
                        type="date"
                        class="form-control"
                        id="date_publication_livre"
                        placeholder="Entrer la date de publication du livre"
                    />
                </div>
                <div class="mb-3">
                    <label for="categorie_livre" class="form-label"
                        >Categorie du livre</label
                    >
                    <input
                        v-model="livre.categorie_livre"
                        type="text"
                        class="form-control"
                        id="categorie_livre"
                        placeholder="Entrer la categorie du livre"
                    />
                </div>
                <div class="mb-3">
                    <label for="nombre_exemplaire_total" class="form-label"
                        >Nombre d'exemplaire total </label
                    >
                    <input
                        v-model="livre.nombre_exemplaire_total"
                        type="text"
                        class="form-control"
                        id="nombre_exemplaire_total"
                        placeholder="Entrer le nombre d'exemplaire total du livre"
                    />
                </div>
                <div class="mb-3">
                    <label for="nombre_exemplaire" class="form-label"
                        >Nombre d'exemplaire</label
                    >
                    <input
                        v-model="livre.nombre_exemplaire"
                        type="text"
                        class="form-control"
                        id="nombre_exemplaire"
                        placeholder="Entrer le nombre d'exemplaire du livre"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useLivre from "../../services/livreServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateLivre, getLivreById } = useLivre();
let livre = ref({
    titre: "",
    date_publication_livre: "",
    categorie_livre: "",
    nombre_exemplaire_total: "",
    nombre_exemplaire: "",
});

function updateALivre() {
    updateLivre(id,livre.value)
        .then((res) => {
            console.log("Livre mis a jour", res);
            router.push("/livre")
        .catch((err) =>console.log("Erreur lors de la mise a jour du livre", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
    if (id) {
        getLivreById(id)
            .then((res) => {livre.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture du livre", err))
    }
})
</script>

<style lang="scss" scoped>
</style>