<template>
     <MobileTemplate>
    <div class="mobile-header" style="display: flex;">
        <div class="header-left">
            <h2>Groups</h2>
        </div>
    </div>

    <div class="mission-cards">
      <span class="fw-semibold" style="font-size:x-small; color:#6B7280">AVAILABLE GROUPS:</span>
      <div class="row flex-row">
        <div class="col-12" v-for="group in groupings" :key="group.grouping_id">
          <div class="card border border-0">
            <div class="card-body bg-light">
              <span class="card-title fw-bold" style="font-size:small">Group {{ group.group_id}}</span><br>
              <span style="font-size:x-small"><strong>Looking for:</strong> {{ group.lf_pax }} pax</span><br>
              <span style="font-size:x-small"><strong>Date of Visit:</strong> {{ new Date(group.date_of_visit).toDateString() }}</span><br>
              <button
                    :class="['btn w-100 mt-2', group.joined ? 'btn-secondary' : 'btn-success']"
                    style="font-size:small;"
                    @click=" createGroup(group.group_id)"
                    :disabled="group.joined"
                    >
                    {{ group.joined ? 'Group Joined' : 'Join Group' }}
                </button>
 
            </div>
          </div>
        </div>
      </div>
    </div>


     </MobileTemplate>
</template>

<script>
import MobileTemplate from '../components/MobileTemplate.vue';
import axios from 'axios';

export default{
    name: 'MyView',
    components: {
        MobileTemplate
    },
    data () {
        return {
            groupings: []
        }
    },
    created() {
        this.getBroadcastListings();
    },
    methods: {
    getBroadcastListings() {
      const apiUrl = "http://127.0.0.1:6104/handleGroup/broadcast_listings";
      
      axios.get(apiUrl).then((response) => {
        this.groupings = response.data.data.notice;
        console.log(response.data.data);
      }).catch((error) => {
        console.log(error);
      });
    },
    joinGroup(){
        group.joined=true
    }
    
    }
}
</script>


<style>
</style>