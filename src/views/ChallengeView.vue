<template>
  <MobileTemplate>
    <!-- content of mobile phone -->
    <div class="mobile-header" style="display: flex;">
      <div class="header-left">
        <h2>Missions</h2>
      </div>
      <div class="header-right">
        <lottie-player src=https://assets6.lottiefiles.com/packages/lf20_rkkqswce.json background="transparent" speed="1"
          style="width: 50px; height:50px;" loop autoplay></lottie-player>
      </div>
    </div>

    <div class="button-group" style="display: flex; justify-content: space-between;">
      <router-link to="/active-challenges" class="btn fw-semibold mb-2"
        style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small; flex: 1; margin-right: 5px;"
        onmouseover="this.style.backgroundColor='#f1f5f9';" onmouseout="this.style.backgroundColor='#fff';">
        My Challenges
      </router-link>
      <router-link to="/reward" class="btn fw-semibold mb-2"
        style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small; flex: 1; margin-left: 5px;"
        onmouseover="this.style.backgroundColor='#f1f5f9';" onmouseout="this.style.backgroundColor='#fff';">
        Points & Rewards
      </router-link>
    </div>


    <div class="mission-cards mb-3">
      <span class="fw-semibold" style="font-size:x-small; color:#6B7280">FEATURED CHALLENGES:</span>
      <div class="row flex-row">
        <div class="col-12" v-for="mission in missions" :key="mission.id">
          <div class="card border border-0">
            <div class="card-body bg-light">
              <span class="card-title fw-bold" style="font-size:small">{{ mission.name }}</span><br>
              <span class="fw-light fst-italic" style="font-size:xx-small; color:#6B7280;">{{ mission.description
              }}</span><br>
              <span style="font-size:x-small"><strong>Difficulty:</strong> {{ mission.difficulty }}</span><br>
              <span style="font-size:x-small"><strong>Duration:</strong> {{ mission.duration }}</span><br>
              <span style="font-size:x-small"><strong>Points:</strong> {{ mission.award_points }}</span>

              <button :class="['btn w-100 mt-2', mission.challenge ? mission.challenge.status == 'Completed' ? 'btn-success' : 'btn-secondary' : 'btn-success']"
                style="font-size:small;" @click="createChallenge(mission.mission_id)" :disabled="mission.challenge">
                {{ mission.challenge ? mission.challenge.status == 'Completed' ? 'Completed' : 'Challenge Joined' : 'Join Challenge' }}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Pop up message: join successful -->
    <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showSuccess">
            <p class="notification-title d-flex justify-content-center align-items-center fw-bolder text-success" style="font-size:MEDIUM">Challenge Accepted! &nbsp; <span style="font-size: x-large">🤠</span></p>
            <button @click="showSuccess= false; $router.go()" type="button" class="btn btn-sm btn-close d-flex justify-content-right m-1" aria-label="Close"></button>
            <hr>
            <p class="text-center" style="font-size:small;" >You have been enrolled into the challenge. All the best! </p>
        </div>


  </MobileTemplate>
</template>

<script>
import { useAccountStore } from "@/stores/account";
import axios from "axios";
import MobileTemplate from "../components/MobileTemplate.vue";
import "@lottiefiles/lottie-player";


export default {
  name: 'ChallengeView',
  components: {
    MobileTemplate
  },
  data() {
    return {
      challenges: [],
      missions: [],
      showSuccess: false
    };
  },
  async created() {
    await this.getChallenges();
    this.getMissions();
  },
  setup() {
    const accountStore = useAccountStore();

    return { accountStore };
  },
  methods: {
    async createChallenge(mission_id) {
      const apiUrl = "http://127.0.0.1:6302/challenge";
      const body = {
        "mission_id": mission_id,
        "account_id": this.accountStore.account.account_id,
      }
      await axios.post(apiUrl, body).then((response) => {
        this.getChallenges();
        this.getMissions();
        this.showSuccess = true;
        console.log(response.data.data);
      }).catch((error) => {
        console.log(error);
      });
    },
    async getChallenges() {
      const apiUrl = "http://127.0.0.1:6302/challenge/account/" + this.accountStore.account.account_id;
      await axios.get(apiUrl).then((response) => {
        this.challenges = response.data.data.challenges;
      }).catch((error) => {
        console.log(error);
      });
    },
    async getMissions() {
      const apiUrl = "http://127.0.0.1:6300/mission/active";
      await axios.get(apiUrl).then((response) => {
        const missions = response.data.data.missions;

        const missionsWithChallenges = missions.map((mission) => {
          const challenge = this.challenges.find((challenge) => mission.mission_id === challenge.mission_id);
          return {
            ...mission,
            challenge: challenge
          };
        });

        this.missions = missionsWithChallenges
      }).catch((error) => {
        console.log(error);
      });
    },
  }
};
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

h2 {
  font-weight: bold;
  font-family: "Arial Rounded MT Bold", sans-serif;
}

.mobile-phone {
  border: 10px solid #000000;
  border-radius: 20px;
  width: 320px;
  /* adjust width as needed */
  height: 640px;
  /* adjust height as needed */
  margin: auto;
  padding: 20px;
  overflow: scroll;
}

.card {
  margin-bottom: 20px;
}

.card-body:hover {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.notification-box {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-left: 8px;
  margin-bottom: 20px;
  margin-top: -55px;
  max-width: 250px;
  width: 100%;
}
.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
  