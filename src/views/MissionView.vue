<template>
  <MobileTemplate>
    <div class="container mt-4">
      <p class="head fw-bold mt-4" style="font-size: xx-large">{{ title }}</p>
      <span class="fw-normal" style="font-size: small">
        Embark on exciting challenges and earn valuable points that you can
        redeem for incredible rewards. All the best!
      </span>
      <div class="d-flex justify-content-center position-relative">
        <div class="lottie-wrapper rounded-circle">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_iwlmrnb5.json"
            background="transparent"
            speed="1"
            style="width: 150px; height: 150px"
            loop
            autoplay
          >
          </lottie-player>
        </div>
      </div>
      <router-link
        class="create-btn btn btn-primary"
        to="/challenge"
        style="color: white; font-size: small"
      >
        I'm Ready
      </router-link>
    </div>
  </MobileTemplate>
</template>

<script>
import MobileTemplate from "../components/MobileTemplate.vue";

export default {
  name: "RideView",
  components: {
    MobileTemplate,
  },
  data() {
    return {
      rides: [],
      loyalties: [],
    };
  },
  props: {
    title: {
      type: String,
      default: "Challenge",
    },
  },
  created() {
    // this.getRides();
    // this.getLoyalties();
  },
};
</script>

<style>
* {
  font-family: "Inter", sans-serif;
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
