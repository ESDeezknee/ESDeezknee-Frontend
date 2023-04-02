<template>
    <MobileTemplate>
        <div class="container mt-4">
      <p class="head fw-bold mt-4" style="font-size: xx-large">{{ title }}</p>
      <span class="fw-normal" style="font-size: small">
        Tired of waiting? Purchase your express tickets to skip the long queues now!
      </span>
      <div class="d-flex justify-content-center position-relative">
        <div class="lottie-wrapper rounded-circle">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_mo3hbxtc.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px"
            loop
            autoplay
          >
          </lottie-player>
        </div>
      </div>
      <router-link class="create-btn btn btn-success" to="/payment-mode" style="color: white; font-size:small" >
        Buy Express Tickets
      </router-link>
    </div>
        
    
    </MobileTemplate>
</template>


<script>
import MobileTemplate from '../components/MobileTemplate.vue';

export default{
    name: 'RideView',
    components: {
        MobileTemplate
    },
    data() {
        return {
            rides: [],
            loyalties: []
        };
    },
    props: {
    title: {
      type: String,
      default: "Ride",
    },
  },
    created() {
        // this.getRides();
        // this.getLoyalties();
    },
}


</script>


<style>

* {
  font-family: 'Inter', sans-serif;
}


.mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

</style>