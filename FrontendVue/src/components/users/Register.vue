<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Inscription</h3>

            <form @submit.prevent="EnregistrerUser">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom </label>
                    <input
                        v-model="user.nom"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer votre nom"
                    />
                </div>
                <div class="mb-3">
                    <label for="prenom" class="form-label">Prenom</label>
                    <input
                        v-model="user.prenom"
                        type="text"
                        class="form-control"
                        id="prenom"
                        placeholder="Entrer le prenom"
                    />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                        v-model="user.email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Entrer l'email de l'utilisateur"
                    />
                </div>
                <div class="mb-3">
                    <label for="naissance" class="form-label">Naissance</label>
                    <input
                        v-model="user.naissance"
                        type="date"
                        class="form-control"
                        id="naissance"
                        placeholder="Entrer la date de naissance de l'utilisateur"
                    />
                </div>
                <div class="mb-3">
                    <label for="telephone" class="form-label">Telephone</label>
                    <input
                        v-model="user.telephone"
                        type="text"
                        class="form-control"
                        id="telephone"
                        placeholder="Entrer le numero de telephone de l'utilisateur"
                    />
                </div>
                <div class="mb-3">
                    <label for="photo" class="form-label">Photo</label>
                    <input
                        v-model="user.telephone"
                        type="text"
                        class="form-control"
                        id="photo"
                        placeholder="Entrer la photo de l'utilisateur"
                    />
                </div>
                <div class="mb-3">
                    <label for="user.user_name" class="form-label">Nom d'utilisateur</label>
                    <input
                        v-model="user.user_name"
                        type="text"
                        class="form-control"
                        id="user_name"
                        placeholder="Entrer le nom d'utilisateur"
                    />
                </div>

                <div class="mb-3">
                    <label for="user.password" class="form-label"
                        >Mot de passe</label
                    >
                    <input
                        v-model="user.password"
                        type="text"
                        class="form-control"
                        id="password"
                        placeholder="Entrer le mot de passe"
                    />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useUser from "../../services/userServices";
import { useRouter } from "vue-router";


// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addUser } = useUser();
let user = ref({
    nom: "",
    prenom:"",
    email:"",
    naissance:"",
    telephone:"",
    photo :"",
    user_name: "",
    password: "",
    
});
function EnregistrerUser() {
    //Appel de notre route dans le backend (express) pour ajouter un departement
    addUser(user.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouvel utilisateur", res);
            //On va etre redirige vers la table des departements
            router.push("/login");
        })
        .catch((err) => console.log("Erreur lors de l'ajout d'un utilisateur", err));
}
</script>

<style lang="scss" scoped>
</style>