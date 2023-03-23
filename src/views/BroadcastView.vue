<template>
    <MobileTemplate>

      <div class="mt-4">
            <router-link to="/create-group" class="back-btn mb-2 w-20 bg-light border-0 " style="font-size:x-small; font-weight: 900;">
            <i class="bi bi-chevron-left"></i>
            </router-link>
            <h5 class="d-flex justify-content-center mt-4">{{ title }}</h5>
      </div>

        <div class="d-flex justify-content-center position-relative">
            <lottie-player src=https://assets4.lottiefiles.com/private_files/lf30_y1tasdqo.json background="transparent" speed="1"
          style="width: 200px; height:150px;" loop autoplay></lottie-player>
        </div>
        <div class="input-group-view">
        <div class="card border border-0">
          <div class="card-body bg-light">
            <form>
              <div class="mb-3" style="font-size:small">
                <label for="lf_pax" class="col col-form-label">Looking For:</label>
                <input type="number" class="form-control" id="lf_pax" v-model="lf_pax" ref="lf_pax"
                placeholder="how many pals?">
              </div>
  
              <div class="mb-3" style="font-size:small">
                <label for="date_of_visit" class="col col-form-label">Date of Visit:</label>
                <input type="date" class="form-control" id="date_of_visit" v-model="date_of_visit" ref="date_of_visit">
              </div>
  
              <button type="button" class="btn btn-success form-control mt-2" style=" color:white;"
                @click="createBroadcast">Confirm</button>
            </form>
  
          </div>
        </div>
        </div>


        <!-- Pop up message: broadcast failed -->

        <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showFailure">
            <p class="notification-title d-flex justify-content-center" style="font-size:small; color=#da1e37">Broadcast Failed. Please try again! </p>
            <button @click="showFailure = false" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
        </div>

        <!-- Pop up message: broadcast successful  -->
        <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showSuccess">
            <p class="notification-title d-flex justify-content-center fw-bolder" style="color: #38b000; font-size:medium">SUCCESS</p>
            <button @click="showSuccess= false" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
            <hr>
            <p class="text-center" style="font-size:small">We will notify you when someone joins your group! 🥳 </p>
        </div>

    </MobileTemplate>
</template>

<script>

import axios from "axios";
import console from "console";
import MobileTemplate from "../components/MobileTemplate.vue";
export default {
    name: "BroadcastView",
    components: {
        MobileTemplate,
    },
    props: {
      title: {
        type: String,
        default: 'Broadcast Information',
      }
    },
    data(){
        return {
            lf_pax: '',
            date_of_visit: '',
            showFailure: false,
            showSuccess: false
        }
    },
    created() {
        const group_id = this.$route.params.group_id;
    },
    methods:{
        createBroadcast(group_id){
            const apiUrl = "http://127.0.0.1:6104/handleGroup/broadcast";
            const body = {
              group_id: group_id,
              lf_pax: this.lf_pax,
              date_of_visit: this.date_of_visit
            }

            axios.post(apiUrl, body)
            .then((response) => {
                // console.log(response.data.data);
                this.showSuccess=true;
                this.showFailure = false;
            }).catch((error) => {
              console.log(error)
              this.showSuccess = false;
              this.showFailure = true;
            });
        }
    }
}

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

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 50vh; */
  overflow: hidden;
}


.image-container {
  border-radius: 5%;
  overflow: hidden;
  margin-bottom: 20px;
}

.rounded-image {
  width: 100%;
  height: auto;
  border-radius: 5;
}

.create-btn {
  margin-top: 10px;
  width: 100%;


}

.form-control::placeholder{
    font-size: 0.75rem;
    font-style: italic;
    /* font-weight: 400;
    color: #000; */
    
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