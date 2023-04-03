<template>
  <MobileTemplate>
    <!-- content of mobile phone -->

    <div class="mobile-header justify-content-center">
      <lottie-player src=https://assets8.lottiefiles.com/packages/lf20_KvK0ZJBQzu.json background="transparent" speed="1"
        style="width: 200px; height:200px;" loop autoplay></lottie-player>
    </div>

    <div>
      <h2>Login</h2>
    </div>

    <form class="mt-4" @submit.prevent="loginWithEmail">
      <div class="mb-4">
        <label for="email" class="input-label fw-semibold mb-1" title="Email Address is required">Email Address<span
            class="text-danger">*</span></label>
        <input v-model="email" type="email" name="email" id="email" class="input-field form-control"
          placeholder="Enter Email Address" required />
      </div>

      <div class="mb-4">
        <label for="password" class="input-label fw-semibold mb-1" title="Password is required">Password<span
            class="text-danger">*</span></label>
        <input v-model="password" type="password" name="password" id="password" class="input-field form-control"
          placeholder="Enter Password" required />
      </div>

      <div class="input-control mt-4">
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </div>
    </form>

    <div class="mt-3 d-flex justify-content-center">
      <span class="me-1" style="font-size:small; color:#6B7280;">Don't have an account?</span><a href="#signup"
        class="ms-1" style="font-size:small;">Sign up</a>
    </div>
  </MobileTemplate>
</template>

<script>
import { useAccountStore } from "@/stores/account";
import MobileTemplate from "../components/MobileTemplate.vue";
import "@lottiefiles/lottie-player";

export default {
  name: "LoginView",
  components: {
    MobileTemplate,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMsg: "",
    };
  },
  setup() {
    const accountStore = useAccountStore();

    return { accountStore };
  },
  methods: {
    async loginWithEmail() {
      try {
        const response = await this.accountStore.loginWithEmail(
          this.email
        );

        this.$router.push("/home");
      } catch (error) {
        console.log(error.message)
      }
    },
  },
};
</script>

<style>
* {
  font-family: "Inter", sans-serif;
}

input[type="email"],
input[type="password"] {
  font-size: small;
}
</style>
