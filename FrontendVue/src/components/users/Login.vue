<template>
  <div class="container">
    <div class="card mx-auto mt-5" style="max-width: 400px;">
      <div class="card-body">
        <h3 class="card-title text-center mb-4">Login</h3>

        <form @submit.prevent="loginUser">
          <div class="mb-3">
            <label for="user_name" class="form-label">Username</label>
            <input
              v-model="user.user_name"
              type="text"
              class="form-control"
              id="user_name"
              placeholder="Enter your username"
              required
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary w-100 mt-4">Log in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useUser from "../../services/userServices";
import { useRouter } from "vue-router";

const router = useRouter();
const { login } = useUser();
let user = ref({
  user_name: "",
  password: "",
});

function loginUser() {
  login(user.value)
    .then((res) => {
      console.log("New user", res);
      router.push("/departments");
      
    })
    .catch((err) => console.log("Error while adding a user", err));
}
</script>

<style lang="scss" scoped>
/* Adjust the form style as needed */
.container {
  padding-top: 2rem;
}
</style>