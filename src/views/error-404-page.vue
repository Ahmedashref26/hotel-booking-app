<template>
  <div>
    <div class="container">
      <!-- BEGIN: Error Page -->
      <div class="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left">
        <div class="lg:mr-20">
          <img alt="error img" class="h-48 lg:h-auto" src="@/assets/images/404.svg" />
        </div>
        <div class="text-primary mt-10 lg:mt-0">
          <div class=" text-8xl font-medium">404</div>
          <div class=" text-xl lg:text-3xl font-medium mt-5">
            Sorry, the page you visited does not exist
          </div>
          <div class="flex items-center gap-3">
            <button class=" btn py-3 px-4 text-secondary border-white mt-10" @click="goToHome">
              Go To Home Page
            </button>
          </div>
        </div>
      </div>
      <!-- END: Error Page -->
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goToHome = () => router.push("/");
</script>

