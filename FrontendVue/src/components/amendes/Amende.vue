<template>
    <div>
        <p>Date d'amende: {{ amende.date_amende }}</p>
        <p>Montant: {{ amende.montant }}</p>
       
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    amende: {
        type: Object,
        default: () => ({
            date_amende: "",
            montant: ""
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>