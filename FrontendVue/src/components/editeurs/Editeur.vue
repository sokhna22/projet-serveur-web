<template>
    <div>
        <p>Nom: {{ editeur.nom }}</p>
        <p>Adresse: {{ editeur.adresse }}</p>
        <p>Telephone: {{ editeur.telephone }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    editeur: {
        type: Object,
        default: () => ({
            nom: "",
            adresse: "",
            telephone:""
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>