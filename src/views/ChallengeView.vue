<template>

    <div class="container ">
      <div class="row justify-content-center align-items-center" style="height: 100vh;">
        <div class="col-sm-6">
          <div class="mobile-phone bg-white">
            <!-- content of mobile phone -->
            <div class="mobile-header">
                <div class="header-left">
                <h2>MISSIONS</h2>
                </div>
            </div>

            <button class="btn btn-secondary mt-3 mb-3 w-100" @click="viewActiveChallenges">View Active Challenges</button>

            <div class="mission-cards">
                <b>FEATURED MISSIONS:</b>
                <div class="row flex-row">
                <div class="col-12" v-for="mission in featuredMissions" :key="mission.id">
                    <div class="card">
                    <div class="card-body bg-light">
                        <h4 class="card-title">{{ mission.name }}</h4>
                        <p class="card-text">{{ mission.description }}</p>
                        <p class="card-text"><strong>Difficulty:</strong> {{ mission.difficulty }}</p>
                        <p class="card-text"><strong>Duration:</strong> {{ mission.duration }}</p>
                        <p class="card-text"><strong>Points:</strong> {{ mission.award_points }}</p>
                        <button class="btn btn-success w-100" @click="joinChallenge(mission.id)">Join Challenge</button>
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

</style>
  