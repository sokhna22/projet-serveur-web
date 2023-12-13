<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title mb-3">Ajout d'un nouveau departement</h3>

      <form @submit.prevent="addNewDepartment">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input
            v-model="departement.nom"
            type="text"
            class="form-control"
            id="nom"
            placeholder="Entrer le nom"
          />
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input
            v-model="departement.description"
            type="text"
            class="form-control"
            id="description"
            placeholder="Donner une description"
          />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Date de creation</label>
          <input
            v-model="departement.creation_date"
            type="date"
            class="form-control"
            id="date"
            placeholder="Donner la date de creation"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useDepartment from "../../services/departmentServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addDepartment } = useDepartment();
let departement = ref({
  nom: "",
  description: "",
  creation_date: "",
});
function addNewDepartment() {
  //Appel de notre route dans le backend (express) pour ajouter un departement
  addDepartment(departement.value)
    .then((res) => {
      //Si tout se passe bien ce message apparait dans la console
      console.log("Nouveau departement", res);
      //On va etre redirige vers la table des departements
      router.push("/departments");
    })
    .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>