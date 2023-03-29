<template>
  <MobileTemplate>
    <div class="login-container">
      <div class="heading">
        <h1 class="text text-large fw-900">Log In</h1>
        <!-- sign up not working-->
        <p class="text text-normal">
          New user?
          <span
            ><router-link to="/signup" class="text text-links"
              >Create an account</router-link
            ></span
          >
        </p>

        <div id="errorMsg"></div>
      </div>

      <div class="form">
        <div class="mb-4">
          <label
            for="email"
            class="input-label fw-semibold mb-1"
            title="Email Address is required"
            >Email Address<span class="text-danger">*</span></label
          >
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            class="input-field form-control"
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div class="mb-4">
          <label
            for="password"
            class="input-label fw-semibold mb-1"
            title="Password is required"
            >Password<span class="text-danger">*</span></label
          >
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            class="input-field form-control"
            placeholder="Enter Password"
            required
          />
        </div>

        <div class="input-control mt-4">
          <input
            v-on:click="loginWithEmail()"
            type="submit"
            name="submit"
            style="color: white"
            class="input-submit mt-3 w-100 d-flex align-items-center bg-primary justify-content-center"
            value="Log In"
          />
        </div>
      </div>
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
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}

.text-large {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-black);
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.form .input-field {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: inherit;
  width: 100%;
  height: auto;
  padding: 0.75rem 1.25rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  color: var(--color-black);
  background: var(--color-light);
  text-transform: unset;
  text-rendering: optimizeLegibility;
  background-color: #e9ecef;
}

.form .input-submit {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: inherit;
  cursor: pointer;
  min-width: 40%;
  height: auto;
  padding: 0.65rem 1.25rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  color: var(--color-white);
  background: var(--color-blue);
  box-shadow: var(--shadow-medium);
  text-transform: capitalize;
  text-rendering: optimizeLegibility;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  display: block;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 5px; /* add border-radius */
}
</style>
