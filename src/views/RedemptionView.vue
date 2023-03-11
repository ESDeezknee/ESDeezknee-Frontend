<template>
<RouterView />
    <MobileTemplate>
        <div class="mobile-header" style="display: flex;">
          <div class="header-left">
          <h2>Redemption</h2>
          </div>
          <div class="header-right">
            <lottie-player src=https://assets10.lottiefiles.com/packages/lf20_aunkuejh.json  background="transparent" speed="1" style="width: 50px; height:50px;" loop autoplay></lottie-player>
          </div>
      </div>

      <div class="loyalty-card">
        <h4 class="loyalty-card-title">My Loyalty Points: </h4>
        <p class="loyalty-card-points">{{ loyalties.available_points }}</p>
    </div>
    <hr>

      <div class="mission-cards">
        <span class="fw-semibold" style="font-size:x-small; color:#6B7280">AVAILABLE REWARDS:</span>
        <div class="row flex-row">
        <div class="col-12" v-for="reward in rewards" :key="reward.id">
            <div class="card border border-0">
            <div class="card-body bg-light">
                <span class="card-title fw-bold" style="font-size:small">{{ reward.name }}</span><br>
                <span class="fw-light fst-italic" style="font-size:xx-small; color:#6B7280;">{{ reward.description }}</span><br>
                <span style="font-size:x-small" ><strong>Points:</strong> {{ reward.exchange_points }}</span><br>
                <span style="font-size:x-small"><strong>Quantity:</strong> {{ reward.quantity }}</span><br>
                <img :src="reward.image_url" alt="Image" style="height: 30px; vertical-align: middle;" class="mt-2">
            </div>
            </div>
        </div>
        </div>
    </div>


    <router-link to="/challenge" class="btn fw-semibold mb-2 w-100" 
            style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small"
            onmouseover="this.style.backgroundColor='#f1f5f9';" 
            onmouseout="this.style.backgroundColor='#fff';">
            Return to Missions
      </router-link>


    </MobileTemplate>
</template>
  
<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from "axios";
import MobileTemplate from '../components/MobileTemplate.vue';

export default {
    name: 'MyComponent',
    components: {
        MobileTemplate
  },
  data() {
    return {
      rewards: [],
      loyalties:[]
    };
  },
  created() {
    this.getRewards();
    this.getLoyalties();
  },
  methods: {
    getRewards() {
      const apiUrl = "http://127.0.0.1:6303/reward";
      axios.get(apiUrl).then((response) => {
        this.rewards = response.data.data.rewards;
        console.log(this.rewards);
      }).catch((error) => {
        console.log(error);
      });
    },
    getLoyalties() {
      const apiUrl = "http://127.0.0.1:6301/loyalty/1";
      axios.get(apiUrl).then((response) => {
        this.loyalties = response.data.data;
        console.log(this.loyalties);
      }).catch((error) => {
        console.log(error);
      });
    },
  }
}

</script>
  
<style>

* {
  font-family: 'Inter', sans-serif;
}

.card {
  margin-bottom: 20px;
}

.card-body:hover {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}


.loyalty-card {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  /* padding: 1rem; */
  border-radius: 0.5rem;
  background-color: #fff;
  padding-bottom: 0%;
}

.loyalty-card-title {
  font-size: small;
  margin: 0;
  font-weight: bold;
}

.loyalty-card-points {
  font-size: x-large;
  font-weight: bold;
  margin: 0;
}

.loyalty-card-divider {
  margin: 0;
  border-top: 1px solid #ccc;
  width: 100%;
}


</style>