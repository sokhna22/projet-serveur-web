<template>
    <div>
        <p>Nom du rayon: {{ rayon.nom }}</p>
        
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    rayon: {
        type: Object,
        default: () => ({
            nom: ""
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>