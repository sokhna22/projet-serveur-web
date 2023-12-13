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
          <td>Description</td>
          <td>Date de creation</td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="department in departments" :key="department.id">
          <td>{{ department.id }}</td>
          <td>{{ department.nom }}</td>
          <td>{{ department.description }}</td>
          <td>{{ department.creation_date }}</td>
          <td>
            <button
              class="btn btn-danger"
              @click="removeDepartment(department.id)"
            >
              Delete
            </button>
          </td>
          <td>
            <button
              class="btn btn-success"
              @click="router.push(`/mise-a-jour-departement/${department.id}`)"
            >
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button
        @click="router.push('/nouveau-departement')"
        class="btn btn-primary"
      >
        Add new department
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Department from "./Department.vue";
import useDepartment from "../../services/departmentServices";
import { useRouter } from "vue-router";

const { getDepartmentList, deleteDepartment } = useDepartment();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let departments = ref([]);

const removeDepartment = (id) => {
  //Appel de la route de suppression d'un departement (depuis express)
  deleteDepartment(id)
    .then((res) => {
      //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
      console.log("Departement supprime");

      //Lecture de la liste complete depuis express
      getDepartmentList()
        .then((res) => {
          console.log("Les resultats", res);
          departments.value = res.data;
        })
        .catch((err) =>
          console.log("Il ya erreur de lectures des departements", err)
        );
    })
    .catch((err) =>
      console.log("Erreur lors de la suppression du departement", err)
    );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
  //Chargement de la liste des departements depuis le backend (express)
  getDepartmentList()
    .then((res) => {
      console.log("Les resultats", res);
      departments.value = res.data;
    })
    .catch((err) =>
      console.log("Il y a erreur de lectures des departements", err)
    );
});
</script>

<style lang="scss" scoped>
</style>