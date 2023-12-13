<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title mb-3">Mise a jour d'un departement</h3>

      <form @submit.prevent="updateAAuteur">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input
            v-model="auteur.nom"
            type="text"
            class="form-control"
            id="nom"
            placeholder="Entrer le nom"
          />
        </div>

        <div class="mb-3">
          <label for="prenom" class="form-label">Prenom</label>
          <input
            v-model="auteur.prenom"
            type="text"
            class="form-control"
            id="prenom"
            placeholder="Entrer le prenom"
          />
        </div>
        <div class="mb-3">
          <label for="naissance" class="form-label">Naissance</label>
          <input
            v-model="auteur.naissance"
            type="date"
            class="form-control"
            id="naissance"
            placeholder="Donner la date de naissance"
          />
        </div>
        <div class="mb-3">
          <label for="nationalite" class="form-label">Nationalité</label>
          <input
            v-model="auteur.nationalite"
            type="text"
            class="form-control"
            id="nationalite"
            placeholder="Entrer la nationalité"
          />
        </div>
        <div class="mb-3">
          <label for="sexe" class="form-label">Sexe</label>
          <input
            v-model="auteur.sexe"
            type="text"
            class="form-control"
            id="sexe"
            placeholder="Entrer le sexe"
          />
        </div>
        <div class="mb-3">
          <label for="biographie" class="form-label">Biographie</label>
          <input
            v-model="auteur.biographie"
            type="text"
            class="form-control"
            id="biographie"
            placeholder="Entrer la biographie"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useAuteur from "../../services/auteurServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateAuteur, getAuteurById } = useAuteur();
let auteur = ref({
  nom: "",
  prenom: "",
  naissance: "",
  nationalite: "",
  sexe: "",
  biographie: "",
});

function updateAAuteur() {
  updateAuteur(id, auteur.value).then((res) => {
    console.log("Auteur mis a jour", res);
    router
      .push("/auteur")
      .catch((err) =>
        console.log("Erreur lors de la mise a jour de l'auteur", err)
      );
  });
}

onBeforeMount(() => {
  //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
  if (id) {
    getAuteurById(id)
      .then((res) => {
        auteur.value = res.data;
      })
      .catch((err) =>
        console.log("Erreur lors de la lecture de l'auteur", err)
      );
  }
});
</script>

<style lang="scss" scoped>
</style>