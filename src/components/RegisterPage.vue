<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, AuthCredential, } from "firebase/auth";
import { useRouter } from "vue-router";
import firebase, { FirebaseError } from 'firebase/app';
import 'firebase/auth'; // Certifique-se de importar o módulo de autenticação


const email = ref("");
const password = ref("123456");
const router = useRouter();

const register = async (submitEvent: Event) => {
  // Verifique se submitEvent.target não é nulo e é uma instância de HTMLFormElement
  if (submitEvent.target instanceof HTMLFormElement) {
    // data update
    const emailInput = submitEvent.target.elements.namedItem('email') as HTMLInputElement | null;
    const passwordInput = submitEvent.target.elements.namedItem('password') as HTMLInputElement | null;

    if (emailInput && passwordInput) {
      email.value = emailInput.value;
      password.value = passwordInput.value;

      // Verifique se email e password não são nulos ou vazios
      if (email.value && password.value) {
        // firebase registration
        const auth = getAuth();

        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          console.log(user);
          console.log("Registration completed");
          router.push("/");
        } catch (error: any) {
          if (error instanceof FirebaseError) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            const alert_2 = document.querySelector("#alert_2");
            if (alert_2) {
              alert_2.classList.remove("d-none");
              alert_2.innerHTML = errorMessage;
              console.log(alert_2);
            }
          } else {
            // Se o erro não for do tipo esperado, você ainda pode usar 'unknown'
            console.error("Unknown error:", error);
          }
        }
      } else {
        console.error("Email ou password estão nulos ou vazios");
      }
    }
  }
};

const moveToLogin = () => {
  router.push("/Login");
};
</script>


<template>
  <div class="container">
    <div
      class="container bg-black bg-opacity-80 p-10 w-96  h-[26rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-md shadow-md">
      <form @submit.prevent="register">
        <div class="flex items-center justify-center w-full">
          <h2 class="mb-3 text-2xl font-semibold text-white">Cadastre-se</h2>
        </div>

        <div class="input mb-6 text-white">
          <label for="email">Email address</label>
           <input class="form-input mt-1 block w-full h-8 px-2 rounded-md border-gray-300" type="text" name="email"
              placeholder="email@adress.com" />
        </div>
        <div class="input text-white">
          <label for="password">Password</label>
         <input class="form-input mt-1 block w-full h-8 px-2 rounded-md border-gray-300" type="password" name="password"
              placeholder="password123" />
        </div>

        <div class="alternative-option mt-4 text-white">
         já possui uma conta? <span @click="moveToLogin">Login</span>
        </div>

    <div class="flex items-center justify-center w-full">
            <button type="submit"
              class="mt-20 btn-pers bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Registrar
            </button>
          </div>
   <div class="alert alert-warning alert-dismissible fade show mt-5 hidden" role="alert" id="alert_1">
         
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      </form>
    </div>

  </div>
</template>

