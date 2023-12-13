<template>
    <div>
        <p>Nom: {{ auteur.nom }}</p>
        <p>Prenom: {{ auteur.prenom }}</p>
        <p>Naissance: {{ auteur.naissance }}</p>
        <p>Nationalité: {{ auteur.nationalite }}</p>
        <p>Sexe: {{ auteur.sexe }}</p>
        <p>Biographie: {{ auteur.biographie }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    auteur: {
        type: Object,
        default: () => ({
            nom: "",
            prenom: "",
            naissance: "",
            nationalité: "",
            sexe: "",
            biographie: ""
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>