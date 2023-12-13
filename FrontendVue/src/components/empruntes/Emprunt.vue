<template>
    <div>
        <p>Date d'emprunt: {{ emprunt.date_emprunt }}</p>
        <p>Date de retour prevu: {{ emprunt.date_retour_prevu }}</p>
        <p>Date de retour effective: {{ emprunt.date_retour_effectif }}</p>
        <p>Status: {{ emprunt.status }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    emprunt: {
        type: Object,
        default: () => ({
            date_emprunt: "",
            date_retour_prevu: "",
            date_retour_effectif:'',
            status:''
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>