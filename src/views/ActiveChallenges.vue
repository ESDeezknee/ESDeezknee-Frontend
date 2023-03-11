<template>
    <RouterView />

    <MobileTemplate>
      <div class="mobile-header" style="display: flex;">
          <div class="header-left">
          <h2>Challenges</h2>
          </div>
          <div class="header-right">
            <lottie-player src=https://assets2.lottiefiles.com/packages/lf20_oxknijaf.json  background="transparent" speed="1" style="width: 50px; height:50px;" loop autoplay></lottie-player>
          </div>
      </div>

      <div class="mission-cards">
          <span class="fw-semibold" style="font-size:x-small; color:#6B7280">MY ACTIVE CHALLENGES:</span>
          <div class="row flex-row">
          <div class="col-12" v-for="mission in missions" :key="mission.id">
              <div class="card border border-0">
              <div class="card-body bg-light">
                  <span class="card-title fw-bold" style="font-size:small">{{ mission.name }}</span><br>
                  <span class="fw-light fst-italic" style="font-size:xx-small; color:#6B7280;">Ends on: {{ mission.modified }}</span><br>
                  <span style="font-size:x-small" ><strong>Difficulty:</strong> {{ mission.difficulty }}</span><br>
                  <span style="font-size:x-small"><strong>Duration:</strong> {{ mission.duration }}</span><br>
                  <span style="font-size:x-small"><strong>Points:</strong> {{ mission.award_points }}</span><br>  
                  <span :class="['alert', challengeStatusClass(mission.mission_id), 'mt-2', 'challenge-alert']" role="alert">
                      <span class="text-center">{{ challengeStatus(mission.mission_id) }}</span>
                  </span>
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
            challenges: [],
            missions:[],
        };
    },
    created() {
        this.getMissions();
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
        getChallenges(){
          const url = "http://127.0.0.1:6302/challenge";
          axios.get(url).then((response) => {
            this.challenges = response.data.data.challenges;
            console.log(this.challenges)
          }).catch((error) => {
            console.log(error);
          });
        }
    },
    computed: {
    challengeStatus() {
      return (missionId) => {
        const challenges = this.challenges.filter(challenge => challenge.challenge_id === missionId);
        if (challenges.length === 0) {
          return 'Unknown';
        }
        if (challenges.every(challenge => challenge.status === 'Completed')) {
          return 'Completed';
        } else if (challenges.some(challenge => challenge.status === 'In Progress')) {
          return 'In Progress';
        } else {
          return 'Failed';
        }
      };
    },
    challengeStatusClass() {
      return (missionId) => {
        const challenges = this.challenges.filter(challenge => challenge.challenge_id === missionId);
        if (challenges.length === 0) {
          return 'alert-secondary';
        }
        if (challenges.every(challenge => challenge.status === 'Completed')) {
          return 'alert-success';
        } else if (challenges.some(challenge => challenge.status === 'In Progress')) {
          return 'alert-warning';
        } else {
          return 'alert-danger';
        }
      };
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