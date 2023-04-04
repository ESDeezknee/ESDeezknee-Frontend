<template>
  <MobileTemplate>
    <div class="mt-4">
      <router-link to="/group" class="back-btn mb-2 w-20 bg-light border-0 " style="font-size:x-small; font-weight: 900;">
        <i class="bi bi-chevron-left"></i>
      </router-link>
      <h5 class="d-flex justify-content-center">{{ title }}</h5>
    </div>
    <div class="d-flex justify-content-center position-relative">
      <lottie-player src=https://assets4.lottiefiles.com/packages/lf20_6aYlBl.json background="transparent" speed="1"
        style="width: 200px; height:150px;" loop autoplay></lottie-player>
    </div>
    <div class="input-group-view">
      <div class="card border border-0">
        <div id="errorMsg" style="font-size:x-small; font-style: italic;"></div>
        <div class="card-body bg-light">
          <form>
            <div class="mb-3" style="font-size:small">
              <label for="pax" class="col col-form-label">Number of pax:</label>
              <input type="number" class="form-control" id="no_of_pax" v-model="number_of_pax" ref="paxInput">
            </div>
            <div class="mb-3" style="font-size:small;">
              <label for="description" class="col form-label">Description:</label>
              <textarea class="form-control" id="description" v-model="description" rows="2" ref="descriptionInput"
                placeholder="e.g. hello, i am ..."></textarea>
            </div>
            <button type="button" class="btn btn-success form-control mt-2 " style="color:white;"
              @click="createGroup(group_id)">Confirm</button>
          </form>
        </div>
      </div>
      <!-- Pop-up upon confirmation-->
      <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showNotification">
        <p class="notification-title d-flex justify-content-center align-items-center" style="color: #38b000; font-size:medium; font-weight:700;">
          SUCCESS! &nbsp;<span style="font-size: x-large">🤠</span>
        </p>
        <button @click="showNotification = false" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
        <hr>
        <div class="notification-body justify-content-center" style="font-size:x-small">
          <p class="fs-5 fw-bolder text-center">Group ID: {{ groupID }}</p>
        </div>
        <div class="notification-footer justify-content-center" style="display: flex; justify-content: space-between;">
          <router-link :to="'/broadcast'" type="button" class="btn fw-semibold mb-2" onclick=""
            style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:xx-small; flex: 1; margin-left: 5px;" >
            Broadcast Group
          </router-link>
          <router-link to="/all-groups" type="button" class="btn fw-semibold mb-2" onclick=""
            style="color: rgb(2 132 199); border: 1px solid #ccc; font-size:xx-small; flex: 1; margin-left: 5px;">Join Group
          </router-link>
        </div>
        </div>
    </div>
</MobileTemplate>
</template>

<script>
import { useAccountStore } from "@/stores/account";
import MobileTemplate from '../components/MobileTemplate.vue';
import axios from 'axios';

export default {
  name: "InputGroupView",
  components: {
    MobileTemplate
  },
  props: {
    title: {
      type: String,
      default: 'Input Group Details'
    }
  },
  data() {
    return {
      number_of_pax: '',
      description: '',
      groupID: '',
      showNotification: false,
      errorMsg: ''
    }
  },
  setup() {
    const accountStore = useAccountStore();

    return { accountStore };
  },
  async created() {
    this.createGroup();
  },
  methods: {
    createGroup(group_id) {
      const no_of_pax = document.getElementById("no_of_pax").value;
      const description = document.getElementById("description").value;
      let errorMsg = "";

      const body = {
        list_account: [this.accountStore.account.account_id],
        no_of_pax: no_of_pax,
        description: description,
        status: "Started",
      }
      
      axios.post("http://127.0.0.1:6104/handleGroup/create", body)
        .then((response) => {
          console.log(this.no_of_pax)
          console.log(this.description)
          this.showNotification = false;

          if(this.description == "" && !this.no_of_pax){
            errorMsg = "Please enter number of pax & description!"
          }
          else if(this.description == ""){
            errorMsg = "Please enter description!"
          }
          else if(this.no_of_pax == ""){
            errorMsg = "Please enter number of pax!"
          }
          else{
            this.groupID = response.data.data.group_obj.grouping_id;
            this.showNotification = true;
            this.accountStore.createGroup(
              this.groupID
            );
            // this.$store.dispatch('updateGroupID', this.groupID);
          }

          let temp = document.getElementById("errorMsg")
          temp.innerHTML = errorMsg
          if(errorMsg != ""){
            temp.classList.add("alert")
            temp.classList.add("alert-danger")
          }
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }
}
</script>
  
  
  <style>
  .form-control {
    width: 100%;
    /* text-align: left; */
  }
  
  .card-body {
    width: 100%;
    margin: 1.75rem auto;
  }

  h5 {
    font-weight: bold;
    font-family: "Arial Rounded MT Bold", sans-serif;
}

.form-control::placeholder{
    font-size: 0.75rem;
    font-style: italic;
    /* font-weight: 400;
    color: #000; */
    
}

.card {
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.notification-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.notification-box {
  position: relative;
  /* background-color: #fff; */
  background-color: rgba(25, 135, 84, 0.1);
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
.input-field::placeholder {
  font-size: small;
}




  </style>

  