L
<template>
  <RouterView />
  <MobileTemplate>
    <div class="mobile-header" style="display: flex;">
      <div class="header-left">
        <h2>Rewards</h2>
      </div>
      <div class="header-right">
        <lottie-player src=https://assets10.lottiefiles.com/packages/lf20_aunkuejh.json background="transparent" speed="1"
          style="width: 50px; height:50px;" loop autoplay></lottie-player>
      </div>
    </div>

    <div class="loyalty-card">
      <h4 class="loyalty-card-title">My Loyalty Points: </h4>
      <p class="loyalty-card-points">{{ loyalties.available_points }}</p>
    </div>
    <hr>
    <div class="mission-cards mb-3">
      <span class="fw-semibold" style="font-size:x-small; color:#6B7280">AVAILABLE REWARDS:</span>
      <div class="row flex-row">
        <div class="col-12" v-for="reward in rewards" :key="reward.id">
          <div class="card border border-0">
            <div class="card-body bg-light">
              <span class="card-title fw-bold" style="font-size:small">{{ reward.name }}</span><br>
              <span class="fw-light fst-italic" style="font-size:xx-small; color:#6B7280;">{{ reward.description
              }}</span><br>
              <span style="font-size:x-small;"><strong>Points:</strong> {{ reward.exchange_points }},
                <strong>Quantity:</strong> {{ reward.quantity }} </span><br>
              <!-- <span style="font-size:x-small;"><strong>Quantity:</strong> {{ reward.quantity }}</span><br> -->
              <img :src="reward.image_url" alt="Image" style="height: 100px; vertical-align: middle;"
                class="mt-2 col-md-12 text-center rounded-2 w-100">
              <hr>
              <button class="btn btn-success w-100 mt-2" style="font-size:small;" @click="createRedemption(reward.reward_id)">
                Redeem Reward
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showSuccess">
            <p class="notification-title d-flex justify-content-center align-items-center fw-bolder text-success" style="font-size:MEDIUM">Reward Redeemed! &nbsp;<span style="font-size: x-large">🤠</span></p>
            <button @click="showSuccess= false; $router.push('/reward')" type="button" class="btn btn-sm btn-close d-flex justify-content-right m-1" aria-label="Close"></button>
            <hr>
            <p class="text-center" style="font-size:small;" >Nice! You have redeemed the reward.</p>
     </div>

     <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showError">
            <p class="notification-title d-flex justify-content-center align-items-center fw-bolder text-danger" style="font-size:MEDIUM">Error Occured &nbsp;<span style="font-size: x-large">😢</span></p>
            <button @click="showError= false; $router.push('/reward')" type="button" class="btn btn-sm btn-close d-flex justify-content-right m-1" aria-label="Close"></button>
            <hr>
            <p class="text-center" style="font-size:small;" >{{ errorMessage}}</p>
     </div>

    <router-link to="/redemption" class="btn fw-semibold mb-2 w-100"
      style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small"
      onmouseover="this.style.backgroundColor='#f1f5f9';" onmouseout="this.style.backgroundColor='#fff';">
      My Redemptions
    </router-link>

    <router-link to="/challenge" class="btn fw-semibold mb-2 w-100"
      style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small"
      onmouseover="this.style.backgroundColor='#f1f5f9';" onmouseout="this.style.backgroundColor='#fff';">
      Return to Missions
    </router-link>

  </MobileTemplate>
</template>
  
<script>
import { useAccountStore } from "@/stores/account";
import { RouterLink, RouterView } from 'vue-router'
import axios from "axios";
import MobileTemplate from '../components/MobileTemplate.vue';

export default {
  name: 'RewardView',
  components: {
    MobileTemplate
  },
  data() {
    return {
      rewards: [],
      loyalties: [],
      showSuccess: false,
      showError: false,
      errorMessage: ''
    };
  },
  setup() {
    const accountStore = useAccountStore();

    return { accountStore };
  },
  created() {
    this.getRewards();
    this.getLoyalties();
  },
  methods: {
    getRewards() {
      const apiUrl = "http://127.0.0.1:6303/reward/active";
      axios.get(apiUrl).then((response) => {
        this.rewards = response.data.data.rewards;
        // console.log(this.rewards);
      }).catch((error) => {
        console.log(error);
      });
    },
    getLoyalties() {
      const apiUrl = "http://127.0.0.1:6301/loyalty/" + this.accountStore.account.account_id;
      axios.get(apiUrl).then((response) => {
        this.loyalties = response.data.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    createRedemption(reward_id) {
      const url = "http://127.0.0.1:6304/redemption";
      const body = {
        "reward_id": reward_id,
        "account_id": this.accountStore.account.account_id,
      }
      axios.post(url, body)
        .then((response) => {
          console.log(response.data.data);
          this.getLoyalties()
          this.showSuccess = true;
        }).catch((error) => {
          console.log(error);
          this.showError = true;
          this.errorMessage = error.response.data.message
        });
    },
    getRedemptionStatus(reward_id) {
      const url = "http://127.0.0.1:6304/redemption/account/" + this.accountStore.account.account_id;
      const body = {
        "reward_id": reward_id,
        "account_id": this.accountStore.account.account_id,
      }
      axios.get(url, body)
        .then((response) => {
          // console.log(response.data.data);
          this.status = response.data.data.redemptions.status
          console.log(this.status);

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