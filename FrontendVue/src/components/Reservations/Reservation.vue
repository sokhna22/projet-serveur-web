<template>
    <div>
        <p>Date de reservation: {{ reservation.date_reservation}}</p>
        <p>Date d'expiration: {{ reservation.date_expiration}}</p>
        <p>Status de reservation: {{ reservation.status_reservation}}</p>
        
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    reservation: {
        type: Object,
        default: () => ({
            date_reservation: "",
            date_expiration: "",
            status_reservation: "",
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>