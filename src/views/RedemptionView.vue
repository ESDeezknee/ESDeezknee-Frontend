<template>
<RouterView />
    <MobileTemplate>
        <div class="mobile-header" style="display: flex;">
          <div class="header-left">
          <h2>Redemptions</h2>
          </div>
          <div class="header-right">
            <lottie-player src=https://assets10.lottiefiles.com/packages/lf20_aunkuejh.json  background="transparent" speed="1" style="width: 50px; height:50px;" loop autoplay></lottie-player>
          </div>
      </div>
      <div class="mission-cards">
        <span class="fw-semibold" style="font-size:x-small; color:#6B7280">MY REDEMPTIONS:</span>
        <div class="row flex-row">
        <div class="col-12" v-for="redemption in redemptions" :key="redemption.id">
            <div class="card border border-0">
            <div class="card-body bg-light">
                <span class="card-title fw-bold" style="font-size:small">{{ redemption.name }}</span><br>
                <span class="fw-light fst-italic" style="font-size:xx-small; color:#6B7280;">{{ redemption.description }}</span><br>
                <span style="font-size:x-small;" ><strong>Points:</strong> {{ redemption.exchange_points }}, <strong>Quantity:</strong> {{ redemption.quantity }} </span><br>
                <!-- <span style="font-size:x-small;"><strong>Quantity:</strong> {{ reward.quantity }}</span><br> -->
                <img :src="reward.image_url" alt="Image" style="height: 100px; vertical-align: middle;" class="mt-2 col-md-12 text-center rounded-2">
                
            </div>
            </div>
        </div>
        </div>
    </div>

    <router-link to="/reward" class="btn fw-semibold mb-2 w-100" 
            style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small"
            onmouseover="this.style.backgroundColor='#f1f5f9';" 
            onmouseout="this.style.backgroundColor='#fff';">
            Return to Rewards
    </router-link>

    </MobileTemplate>
</template>
  
<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from "axios";
import MobileTemplate from '../components/MobileTemplate.vue';

export default {
    name: 'RedemptionView',
    components: {
        MobileTemplate
  },
  data() {
    return {
      redemptions: [],
    };
  },
  created() {
    this.getRedemptions();
  },
  methods: {
    getRedemptions() {
      const apiUrl = "http://127.0.0.1:6304/redemption/account/2";
      axios.get(apiUrl).then((response) => {
        this.redemptions = response.data.data.redemptions;
      }).catch((error) => {
        console.log(error);
      });
    },
    getRewards() {
      const apiUrl = "http://127.0.0.1:6303/mission/active";
      axios.get(apiUrl).then((response) => {
        this.missions = response.data.data.missions;
        // console.log(response.data.data);
      }).catch((error) => {
        console.log(error);
      });
    },
    getRedemptions() {
      const apiUrl = "http://127.0.0.1:6304/redemption/account/2";
      axios.get(apiUrl).then((response) => {
        const redemptions = response.data.data.redemptions;

        const challengesWithMissions = challenges.map((challenge) => {
          const mission = this.missions.find((mission) => mission.mission_id === challenge.mission_id);
          return {
            ...challenge,
            mission: mission
          };
        });

        this.challenges = challengesWithMissions

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