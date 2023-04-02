<template>
  <MobileTemplate>
    <div class="mobile-header" style="display: flex;">
      <div class="header-left">
        <h2>Groups</h2>
      </div>
      <div class="header-right">
        <lottie-player src=https://assets7.lottiefiles.com/packages/lf20_tulr8tag.json background="transparent" speed="1"
          style="width: 70px; height:70px;" loop autoplay></lottie-player>
      </div>
    </div>


      <span class="fw-semibold" style="font-size:x-small; color:#6B7280">AVAILABLE GROUPS:</span>
      <div class="mission-cards mb-1">
        <div class="col-12" v-for="broadcast in broadcast_listings">
          <div class="card border border-0">
            <div class="card-body bg-light">
              <span class="card-title fw-bold" style="font-size:small;">Group {{ broadcast.broadcasted_id }}</span><br>
              <span style="font-size:x-small"><strong>Looking For:</strong> {{ broadcast.lf_pax }} pax</span><br>
              <span style="font-size:x-small"><strong>Date of Visit:</strong> {{ new Date(broadcast.date_of_visit).toDateString() }}</span><br>
              <button :class="['btn w-100 mt-2', broadcast.joined ? 'btn-secondary' : 'btn-success']"
                style="font-size:small;" @click="joinGroup(broadcast.broadcasted_id)" :disabled="broadcast.joined">
                {{ broadcast.joined? 'Group Joined' : 'Join Group' }}
              </button>
            </div>
          </div>
        </div>

    </div>

    <router-link to="/group" class="btn fw-semibold mb-2 w-100"
      style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:x-small"
      onmouseover="this.style.backgroundColor='#f1f5f9';" onmouseout="this.style.backgroundColor='#fff';">
      Return to Group
    </router-link>

    <!-- Pop up message: join successful  -->
    <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showSuccess">
      <p class="notification-title d-flex justify-content-center fw-bolder" style="color: #38b000; font-size:MEDIUM">SUCCESS! &nbsp;<i class="bi bi-emoji-smile"></i></p>
      <button @click="showSuccess = false" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
      <hr>
      <p class="text-center" style="font-size:small;" >{{message}}.</p>
    </div>

    <!-- Pop up message: join failure  -->
    <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showFailure">
      <p class="notification-title d-flex justify-content-center fw-bolder" style="font-size:medium; color:#dc3545">ERROR! &nbsp;<i class="bi bi-emoji-frown"></i></p>
      <button @click="showFailure = false" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
      <hr>
      <p class="text-center" style="font-size:small;" >Failed to join group, please try again.</p>
    </div>
  </MobileTemplate>
</template>

<script>
import MobileTemplate from '../components/MobileTemplate.vue';
import axios from 'axios';
import { useAccountStore } from "@/stores/account";

export default {
  props: {
    groupID: {
      type: String,
      default: ''
    }
  },
  name: 'MyView',
  components: {
    MobileTemplate
  },
  data() {
    return {
      broadcast_listings: [],
      showFailure: false,
      showSuccess: false,
      message: '',
    }
  },
  setup() {
    const accountStore = useAccountStore();
    return { accountStore };
  },

  created() {
    this.getBroadcastListings();
  },
  

  methods: {
    getBroadcastListings() {
      const apiUrl = 'http://127.0.0.1:6104/handleGroup/broadcast_listings';
      axios.get(apiUrl)
        .then(response => {
          this.broadcast_listings = response.data.data.notice;
          console.log(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    },

    joinGroup(broadcasted_id) {
      const url = 'http://127.0.0.1:6104/handleGroup/join_group';
      const data = {
        grouping_id: this.accountStore.group,
        broadcasted_id: broadcasted_id
      };

      axios.post(url, data)
        .then(response => {
          console.log(response.data);
          if (response.data.code === 200) {
            this.showSuccess = true;
            this.message = response.data.message;
    
          }else if(response.data.code === 500){
            this.showFailure = true;
          }
      
        })
        .catch(error => {
          console.log(error);
          this.showFailure = true;
        });
    }
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

.notification-box {
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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