<template>
        <MobileTemplate>
            <!-- content of mobile phone -->
            <div class="mobile-header" style="display: flex;">
                <div class="header-left">
                <h2>Missions</h2>
                </div>
                <div class="header-right">
                <lottie-player src=https://assets6.lottiefiles.com/packages/lf20_rkkqswce.json  background="transparent" speed="1" style="width: 50px; height:50px;" loop autoplay></lottie-player>
                </div>
           </div>
           
           <div class="button-group" style="display: flex; justify-content: space-between;">
            <router-link to="/active-challenges" class="btn fw-semibold mb-2" 
                style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small; flex: 1; margin-right: 5px;"
                onmouseover="this.style.backgroundColor='#f1f5f9';" 
                onmouseout="this.style.backgroundColor='#fff';">
                My Challenges
            </router-link>
            <router-link to="/redemption" class="btn fw-semibold mb-2" 
                style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small; flex: 1; margin-left: 5px;"
                onmouseover="this.style.backgroundColor='#f1f5f9';" 
                onmouseout="this.style.backgroundColor='#fff';">
                Points & Rewards
            </router-link>
            </div>


            <div class="mission-cards">
                <span class="fw-semibold" style="font-size:x-small; color:#6B7280">FEATURED CHALLENGES:</span>
                <div class="row flex-row">
                <div class="col-12" v-for="mission in featuredMissions" :key="mission.id">
                    <div class="card border border-0">
                    <div class="card-body bg-light">
                        <span class="card-title fw-bold" style="font-size:small">{{ mission.name }}</span><br>
                        <span class="fw-light fst-italic" style="font-size:xx-small; color:#6B7280;">{{ mission.description }}</span><br>
                        <span style="font-size:x-small" ><strong>Difficulty:</strong> {{ mission.difficulty }}</span><br>
                        <span style="font-size:x-small"><strong>Duration:</strong> {{ mission.duration }}</span><br>
                        <span style="font-size:x-small"><strong>Points:</strong> {{ mission.award_points }}</span>
                        <!-- <button class="btn btn-success w-100 mt-2" style="font-size:small;" @click="joinChallenge(mission.mission_id)">Join Challenge</button> -->

                        <button
                        :class="['btn w-100 mt-2', mission.joined ? 'btn-secondary' : 'btn-success']"
                        style="font-size:small;"
                        @click=" createChallenge(mission.mission_id)"
                        :disabled="mission.joined"
                        >
                        {{ mission.joined ? 'Challenge Joined' : 'Join Challenge' }}
                        </button>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </MobileTemplate>
  </template>

<script>
import axios from "axios";
import MobileTemplate from "../components/MobileTemplate.vue";
import "@lottiefiles/lottie-player";


export default {
    name: 'MyComponent',
    components: {
        MobileTemplate
  },

    data() {
        return {
            featuredMissions: [],
        };
    },
    created() {
        this.getMissions();
    },
    methods: {
        createChallenge(mission_id) {
              const url1 = "http://127.0.0.1:6302/challenge";
              const body = {
                  "mission_id": mission_id, // need to change this make it dynamic when user clicks on indiv challenge
                  "account_id": 2,
              }
              axios.post(url1, body).then((response) => {
                  console.log(response.data.data);
                  mission.joined=true;
              }).catch((error) => {
                  console.log(error);
              });
          },
        getMissions() {
            const apiUrl = "http://127.0.0.1:6300/mission/active";
            axios.get(apiUrl).then((response) => {
                this.featuredMissions = response.data.data.missions;
                // console.log(response.data.data);
            }).catch((error) => {
                console.log(error);
            });
        },
        // joinChallenge(id,mission) {
        //     // logic to join the challenge with the specified id
        //     console.log("Joining challenge with ID:", mission.mission_id);
        //     mission.joined = true;
        // },
        
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
  width: 320px; /* adjust width as needed */
  height: 640px; /* adjust height as needed */
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


</style>
  