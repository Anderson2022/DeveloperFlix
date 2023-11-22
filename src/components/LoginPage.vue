<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

let email = "";
let password = "";
const router = useRouter();


const login = (submitEvent: Event) => {
  submitEvent.preventDefault(); // Evitar o comportamento padrão do formulário

  const form = submitEvent.target as HTMLFormElement;

  email = form.email.value;
  password = form.password.value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if (router) {
        router.push("/dashboard");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      const alert_1 = document.querySelector("#alert_1");

      if (alert_1) {
        alert_1.classList.remove("hidden");
        alert_1.innerHTML = errorMessage;
        console.log(alert_1);
      }
    });
};

const moveToRegister = () => {
  if (router) {
    router.push("/Logout");
  }
};
const callback = (response: any) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
}
</script>


<template>
  <div class="">
    <div
      class="container bg-transparent p-10 w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-md shadow-md">
      <form @submit.prevent="login">
        <div class="flex items-center justify-center w-full">
          <h2 class="mb-3 text-2xl font-semibold">Login</h2>
        </div>

        <div class="input mb-6">
          <label for="email" class="text-gray-600">Email address</label>
          <input class="form-input mt-1 block w-full h-8 px-2 rounded-md border-gray-300" type="text" name="email"
            placeholder="email@adress.com" />
        </div>
        <div class="input mb-6">
          <label for="password" class="text-gray-600">Password</label>
          <input class="form-input mt-1 block w-full h-8 px-2 rounded-md border-gray-300" type="password" name="password"
            placeholder="password123" />
        </div>
        <div class="alternative-option mt-4 text-center text-blue-500">
         Não tem uma conta? <span @click="moveToRegister" class="cursor-pointer">Registre-se</span>
        </div>
        <div class="pt-4">
        <GoogleLogin class="w-11" :callback="callback"/>
        </div>

        <div class="flex items-center justify-center w-full">
          <button type="submit"
            class="mt-4 btn-pers bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Login
          </button>
        </div>

        <div class="alert alert-warning alert-dismissible fade show mt-5 hidden" role="alert" id="alert_1">
         
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </form>
    </div>
  </div>
</template>
