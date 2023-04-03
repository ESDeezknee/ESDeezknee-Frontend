<template>
  <RouterView />
  <MobileTemplate>
    <div class="container mt-4">
      <p class="head fw-bold mt-4" style="font-size: xx-large">{{ title }}</p>
      <span class="fw-normal" style="font-size: small">
        Connect with others by either creating your own group or joining existing ones.
        Let's get started!
      </span>
      <div class="d-flex justify-content-center position-relative">
        <div class="lottie-wrapper rounded-circle">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_jmiecitk.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px"
            loop
            autoplay
          >
          </lottie-player>
        </div>
      </div>
      <router-link class="create-btn btn btn-primary" to="/input-group" style="color: white; font-size:small">
        Create Group</router-link>

    </div>
  </MobileTemplate>
</template>

<script>
import MobileTemplate from "../components/MobileTemplate.vue";
import axios from "axios";

export default {
  name: "MyView",
  components: {
    MobileTemplate,
  },
  props: {
    title: {
      type: String,
      default: "Group",
    },
  },
  methods: {},
};
</script>

<style>
* {
  font-family: "Inter", sans-serif;
}
.head {
  font-weight: bold;
  font-family: "Arial Rounded MT Bold", sans-serif;
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 50vh; */
  overflow: hidden;
}

.image-container {
  border-radius: 5%;
  overflow: hidden;
  margin-bottom: 20px;
}

.rounded-image {
  width: 100%;
  height: auto;
  border-radius: 5;
}

.create-btn {
  margin-top: 10px;
  width: 100%;
}

.lottie-wrapper {
  background-color: #ffe5ec;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rounded-circle {
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 50% / 90%; /* make the oval shape */
  width: 200px; /* set the same width as the Lottie animation */
  height: 150px; /* set the height to create the oval shape */
  overflow: hidden; /* clip the edges to create the oval shape */
}
</style>
