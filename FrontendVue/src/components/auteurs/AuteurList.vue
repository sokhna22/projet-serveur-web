<template>
  <div>
    <!-- <div v-for="department in departments" :key="department.id">
            <Department :department="department" />
        </div> -->
    <table border="2px" class="table table-striped">
      <thead>
        <tr>
          <td>id</td>
          <td>Nom</td>
          <td>Naissance</td>
          <td>Nationalite</td>
          <td>Sexe</td>
          <td>Biographie</td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="auteur in auteurs" :key="auteur.id">
          <td>{{ auteur.id }}</td>
          <td>{{ auteur.nom }}</td>
          <td>{{ auteur.prenom }}</td>
          <td>{{ auteur.nationalite }}</td>
          <td>{{ auteur.sexe }}</td>
          <td>{{ auteur.biographie }}</td>
          <td>
            <button class="btn btn-danger" @click="removeAuteur(auteur.id)">
              Delete
            </button>
          </td>
          <td>
            <button
              class="btn btn-success"
              @click="router.push(`/mise-a-jour-auteur/${auteur.id}`)"
            >
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="router.push('/nouveau-auteur')" class="btn btn-primary">
        Add new auteur
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Auteur from "./Auteur.vue";
import useAuteur from "../../services/auteurServices";
import { useRouter } from "vue-router";

const { getAuteurList, deleteAuteur } = useAuteur();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des auteurs venant de la base de donnee
let auteurs = ref([]);

const removeAuteur = (id) => {
  //Appel de la route de suppression d'un departement (depuis express)
  deleteAuteur(id)
    .then((res) => {
      //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
      console.log("Auteur supprime");

      //Lecture de la liste complete depuis express
      getAuteurList()
        .then((res) => {
          console.log("Les resultats", res);
          auteurs.value = res.data;
        })
        .catch((err) =>
          console.log("Il ya erreur de lectures des auteurs", err)
        );
    })
    .catch((err) =>
      console.log("Erreur lors de la suppression de l'auteur", err)
    );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
  //Chargement de la liste des departements depuis le backend (express)
  getAuteurList()
    .then((res) => {
      console.log("Les resultats", res);
      auteurs.value = res.data;
    })
    .catch((err) => console.log("Il y a erreur de lectures des auteurs", err));
});
</script>

<style lang="scss" scoped>
</style>