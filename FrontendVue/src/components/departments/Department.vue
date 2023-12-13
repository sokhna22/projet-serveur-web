<template>
  <div>
    <p>Nom: {{ department.nom }}</p>
    <p>Date de creation: {{ department.date_creation }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
  department: {
    type: Object,
    default: () => ({
      nom: "",
      creation_date: "",
      description: "",
    }),
  },
});
</script>

<style lang="scss" scoped>
</style>