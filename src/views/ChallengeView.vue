<template>

    <div class="container ">
      <div class="row justify-content-center align-items-center" style="height: 100vh;">
        <div class="col-sm-6">
          <div class="mobile-phone bg-white">
            <!-- content of mobile phone -->
            <div class="mobile-header" style="display: flex;">
                <div class="header-left">
                <h2>MISSIONS</h2>
                </div>
                <div class="header-right">
                    <img src="../assets/logo.svg" style="border-radius: 50%; width: 50px; height: 50px; border: 1px solid #ccc" alt="User Logo">
                </div>
           </div>

            <button class="btn fw-semibold mb-2 w-100" 
            style="color: black; border: 1px solid #ccc; font-size:small"
            onmouseover="this.style.backgroundColor='#f1f5f9';" 
            onmouseout="this.style.backgroundColor='#fff';" 
            @click="viewActiveChallenges">View Active Challenges</button>


            <div class="mission-cards">
                <span class="fw-semibold" style="font-size:x-small; color:#6B7280">FEATURED MISSIONS:</span>
                <div class="row flex-row">
                <div class="col-12" v-for="mission in featuredMissions" :key="mission.id">
                    <div class="card border border-0">
                    <div class="card-body bg-light">
                        <span class="card-title fw-bold" style="font-size:small">{{ mission.name }}</span><br>
                        <span class="fw-light fst-italic" style="font-size:xx-small; color:#6B7280;">{{ mission.description }}</span><br>
                        <span style="font-size:x-small" ><strong>Difficulty:</strong> {{ mission.difficulty }}</span><br>
                        <span style="font-size:x-small"><strong>Duration:</strong> {{ mission.duration }}</span><br>
                        <span style="font-size:x-small"><strong>Points:</strong> {{ mission.award_points }}</span>
                        <button class="btn btn-success w-100 mt-2" style="font-size:small;" @click="joinChallenge(mission.id)">Join Challenge</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      featuredMissions: [
        {
          id: 1,
          name: 'Mission 1',
          description: 'Complete the first mission',
          difficulty: 'Easy',
          duration: '1 hour',
          points: 100,
        },
        {
          id: 2,
          name: 'Mission 2',
          description: 'Complete the second mission',
          difficulty: 'Medium',
          duration: '2 hours',
          points: 200,
        },
        {
          id: 3,
          name: 'Mission 3',
          description: 'Complete the third mission',
          difficulty: 'Hard',
          duration: '4 hours',
          points: 500,
        },
      ],
    };
  },
  created() {
    this.getMissions();
  },
  methods: {
    getMissions() {
        const apiUrl = "http://127.0.0.1:6300/mission/active"

        axios.get(apiUrl).then((response) => {
            this.featuredMissions = response.data.data.missions;
            // console.log(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    },
    joinChallenge(id) {
      // logic to join the challenge with the specified id
      console.log('Joining challenge with ID:', id);
    },
  },

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
  opacity: 0.9;
  transition: opacity 0.2s ease;
}


</style>
  