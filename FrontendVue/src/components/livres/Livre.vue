<template>
    <div>
        <p>Titre: {{ livre.tire }}</p>
        <p>Date de publication: {{ livre.date_publication_livre }}</p>
        <p>Categorie du livre: {{ livre.categorie_livre }}</p>
        <p>Nombre d'exemplaire total: {{ livre.nombre_exemplaire_total }}</p>
        <p>Nombre d'exemplaire: {{ livre.nombre_exemplaire }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    livre: {
        type: Object,
        default: () => ({
            titre: "",
            date_publication_livre: "",
            categorie_livre:'',
            nombre_exemplaire_total:'',
            nombre_exemplaire:'',
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>