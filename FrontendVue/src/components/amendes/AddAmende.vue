<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'une nouvelle amende</h3>

            <form @submit.prevent="addNewAmende">
                <div class="mb-3">
                    <label for="date_amende" class="form-label">Date d'amende</label>
                    <input
                        v-model="amende.date_amende"
                        type="date"
                        class="form-control"
                        id="date_amende"
                        placeholder="Entrer la date d'amende"
                    />
                </div>
                <div class="mb-3">
                    <label for="montant" class="form-label">Montant</label>
                    <input
                        v-model="amende.montant"
                        type="text"
                        class="form-control"
                        id="montant"
                        placeholder="Entrer le montant de l'amende"
                    />
                </div>
                

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useAmende from "../../services/amendeServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addAmende } = useAmende();
let amende = ref({
    date_amende: "",
    montant:"",
    
    
});
function addNewAmende() {
    //Appel de notre route dans le backend (express) pour ajouter un rayon
    addAmende(amende.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouvelle amende", res);
            //On va etre redirige vers la table des auteurs
            router.push("/amende");
        })
        .catch((err) => console.log("Erreur lors de l'ajout de l'amende", err));
}
</script>

<style lang="scss" scoped>
</style>