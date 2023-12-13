<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title mb-3">Mise a jour d'un departement</h3>

      <form @submit.prevent="updateADepartment">
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
import { onBeforeMount, ref } from "vue";
import useDepartment from "../../services/departmentServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateDepartment, getDepartmentById } = useDepartment();
let departement = ref({
  nom: "",
  description: "",
  creation_date: "",
});

function updateADepartment() {
  updateDepartment(id, departement.value).then((res) => {
    console.log("Departement mis a jour", res);
    router
      .push("/departments")
      .catch((err) =>
        console.log("Erreur lors de la mise a jour du departement", err)
      );
  });
}

onBeforeMount(() => {
  //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
  if (id) {
    getDepartmentById(id)
      .then((res) => {
        departement.value = res.data;
      })
      .catch((err) =>
        console.log("Erreur lors de la lecture du departement", err)
      );
  }
});
</script>

<style lang="scss" scoped>
</style>