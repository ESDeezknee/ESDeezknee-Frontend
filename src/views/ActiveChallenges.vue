<template>
  <RouterView />

  <MobileTemplate>
    <div class="mobile-header" style="display: flex;">
      <div class="header-left">
        <h2>Challenges</h2>
      </div>
      <div class="header-right">
        <lottie-player src=https://assets2.lottiefiles.com/packages/lf20_oxknijaf.json background="transparent" speed="1"
          style="width: 50px; height:50px;" loop autoplay></lottie-player>
      </div>
    </div>

    <div class="mission-cards">
      <span class="fw-semibold" style="font-size:x-small; color:#6B7280">MY CHALLENGES:</span>
      <div class="row flex-row">
        <div class="col-12" v-for="challenge in challenges" :key="challenge.id">
          <div class="card border border-0">
            <div class="card-body bg-light">
              <span class="card-title fw-bold" style="font-size:small">{{ challenge.mission.name }}</span><br>
              <span class="fw-light fst-italic" style="font-size:xx-small; color:#6B7280;">Ends on: {{ challenge.end_date
              }}</span><br>
              <span style="font-size:x-small"><strong>Difficulty:</strong> {{ challenge.mission.difficulty }}</span><br>
              <span style="font-size:x-small"><strong>Duration:</strong> {{ challenge.mission.duration }}</span><br>
              <span style="font-size:x-small"><strong>Points:</strong> {{ challenge.mission.award_points }}</span><br>
              <span :class="['alert', challengeStatusClass(challenge.status), 'mt-2', 'challenge-alert']" role="alert">
                <span class="text-center">{{ challengeStatus(challenge.status) }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/challenge" class="btn fw-semibold mb-2 w-100"
      style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small"
      onmouseover="this.style.backgroundColor='#f1f5f9';" onmouseout="this.style.backgroundColor='#fff';">
      Return to Missions
    </router-link>

  </MobileTemplate>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from "axios";
import MobileTemplate from '../components/MobileTemplate.vue';

export default {
  name: 'ActiveChallenges',
  components: {
    MobileTemplate
  },
  data() {
    return {
      challenges: [],
      missions: [],
    };
  },
  async created() {
    await this.getMissions();
    this.getChallenges();
  },
  methods: {
    getMissions() {
      const apiUrl = "http://127.0.0.1:6300/mission/active";
      axios.get(apiUrl).then((response) => {
        this.missions = response.data.data.missions;
        // console.log(response.data.data);
      }).catch((error) => {
        console.log(error);
      });
    },
    getChallenges() {
      const apiUrl = "http://127.0.0.1:6302/challenge/account/2";
      axios.get(apiUrl).then((response) => {
        const challenges = response.data.data.challenges;

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
  },
  computed: {
    challengeStatus() {
      return (status) => {
        if (!status) return "Unknown"

        return status
      }
    },
    challengeStatusClass() {
      return (status) => {
        if (!status) {
          return 'alert-secondary'
        }

        if (status === "Completed") {
          return "alert-success";
        } else if (status === "In Progress") {
          return "alert-warning"
        }
          
        return "alert-danger"
      }
    }
  }
}


</script>

<style>
* {
  font-family: 'Inter', sans-serif;
}

.card {
  margin-bottom: 20px;
  padding-bottom: 5px;
}

.card-body:hover {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.challenge-alert {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-small;
  text-align: center;
  font-weight: 900;
  padding: 0;
  height: 20px;
}
</style>