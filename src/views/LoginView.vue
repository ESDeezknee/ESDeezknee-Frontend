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

    <form class="mt-4">
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
      <span class="me-1" style="font-size:small; color:#6B7280;">Don't have an account?</span><a href="#signup" class="ms-1" style="font-size:small;">Sign Up</a>
    </div>
  </MobileTemplate>
</template>

<script>
import MobileTemplate from "../components/MobileTemplate.vue";

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
  methods: {
    loginWithEmail() {
      // this.$store.dispatch('loginWithEmail', {email: this.email, password: this.password})
      // .then(() => {
      //     this.$router.push('/home')
      // })
      // .catch((error) => {
      //     this.errorMsg = error.message
      // })
    },
  },
};
</script>

<style>
* {
  font-family: "Inter", sans-serif;
}
</style>
