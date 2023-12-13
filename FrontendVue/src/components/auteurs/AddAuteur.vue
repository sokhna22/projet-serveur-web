<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title mb-3">Ajout d'un nouveau auteur</h3>

      <form @submit.prevent="addNewAuteur">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input
            v-model="auteur.nom"
            type="text"
            class="form-control"
            id="nom"
            placeholder="Entrer le nom de l'auteur"
          />
        </div>
        <div class="mb-3">
          <label for="prenom" class="form-label">Prenom</label>
          <input
            v-model="auteur.prenom"
            type="text"
            class="form-control"
            id="prenom"
            placeholder="Entrer le prenom de l'auteur"
          />
        </div>
        <div class="mb-3">
          <label for="naissance" class="form-label">Naissance</label>
          <input
            v-model="auteur.naissance"
            type="date"
            class="form-control"
            id="naissance"
            placeholder="Entrer la date de naissance de l'auteur"
          />
        </div>
        <div class="mb-3">
          <label for="nationalite" class="form-label">Nationalite</label>
          <input
            v-model="auteur.nationalite"
            type="text"
            class="form-control"
            id="nationalite"
            placeholder="Entrer la nationalite de l'auteur"
          />
        </div>
        <div class="mb-3">
          <label for="sexe" class="form-label">Sexe</label>
          <input
            v-model="auteur.sexe"
            type="text"
            class="form-control"
            id="sexe"
            placeholder="Entrer le sexe de l'auteur"
          />
        </div>
        <div class="mb-3">
          <label for="biographie" class="form-label">Biographie</label>
          <input
            v-model="auteur.biographie"
            type="text"
            class="form-control"
            id="biographie"
            placeholder="Entrer le biographie de l'auteur"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useAuteur from "../../services/auteurServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addAuteur } = useAuteur();
let auteur = ref({
  nom: "",
  prenom: "",
  naissance: "",
  nationalite: "",
  sexe: "",
  biographie: "",
});
function addNewAuteur() {
  //Appel de notre route dans le backend (express) pour ajouter un rayon
  addAuteur(auteur.value)
    .then((res) => {
      //Si tout se passe bien ce message apparait dans la console
      console.log("Nouveau auteur", res);
      //On va etre redirige vers la table des auteurs
      router.push("/auteur");
    })
    .catch((err) => console.log("Erreur lors de l'ajout de l'auteur", err));
}
</script>

<style lang="scss" scoped>
</style>