<template>
    <MobileTemplate>
        <div class="mt-4">
            <router-link to="/payment-mode" class="back-btn mb-2 w-20 bg-light border-0 " style="font-size:x-small; font-weight: 900;">
                <i class="bi bi-chevron-left"></i>
            </router-link>
            <h5 class="d-flex justify-content-center mt-4">{{ title }}</h5>
        </div>

        <div class="d-flex justify-content-center mt-4">
        <lottie-player src=https://assets10.lottiefiles.com/packages/lf20_sxbsfnm2.json background="transparent" speed="1"
            style="width: 200px; height:180px;" loop autoplay></lottie-player>
        </div>
        <div class="card border-0">
      
            <div class="card-body bg-light">
                <div class="d-flex flex-column align-items-center">
                    <span style="font-size:small;"><strong>Price of Ticket:</strong> {{price}}</span><br>
                    <span style="font-size:small;"><strong>Points Required:</strong> {{points}}</span><br>
                    <button class="btn btn-success w-100 mb-2" style="font-size:small;" @click="payWithLoyaltyPoints">
                        Redeem Now
                    </button>
                </div>
            </div>
        </div>

        <div class="text-center">
            <router-link to="/payment-mode" class="fw-semibold mb-2 w-100"
            style="color: rgb(2 132 199); font-size:x-small"
            onmouseover="this.style.backgroundColor='#f1f5f9';" onmouseout="this.style.backgroundColor='#fff';">
            Cancel
        </router-link>

        </div>

         <!-- Pop up message: redeem failure  -->
    <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showFailure">
      <p class="notification-title d-flex justify-content-center fw-bolder" style="font-size:medium; color:#dc3545">ERROR! &nbsp;<i class="bi bi-emoji-frown"></i></p>
      <button @click="showFailure = false" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
      <hr>
      <p class="text-center" style="font-size:small;" >Oops, you have insufficient points available to redeem the tickets.</p>
    </div>

          <!-- Pop up message: redeem success -->
    <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showSuccess">
      <p class="notification-title d-flex justify-content-center fw-bolder" style="font-size:medium; color:#38b000">SUCCESS! &nbsp;<i class="bi bi-emoji-smile"></i></p>
      <button @click="showSuccess = false" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
      <hr>
      <p class="text-center" style="font-size:small;" >You have redeemed the express ticket with your loyalty points! <br>You are left with <b>{{ available_points }} points</b>.</p>
    </div>
        
    </MobileTemplate>

</template>


<script>
import MobileTemplate from '../components/MobileTemplate.vue';
import { useAccountStore } from "@/stores/account";
import axios from "axios";

export default {
    name: 'PaymentModeView',
    components: {
        MobileTemplate
    },
    props: {
        title: {
            type: String,
            default: 'Redeem Loyalty Points'
        }
    },
    data() {
        return {
            price: "8.00 SGD",
            points: "500 points",
            showFailure: false,
            showSuccess: false,
            isRedeemClicked: false,

        };
    },
    setup() {
    const accountStore = useAccountStore();

    return { accountStore };
  },

    methods:{

        payWithLoyaltyPoints() {
            const api_url = "http://127.0.0.1:6201/order/get_payment_method/" + this.accountStore.account.account_id ;
            const body = {
                payment_method: 'loyalty',
            };
            axios.post(api_url, body)
            .then(response => {
                console.log(response.data)

                this.available_points = response.data.available_points

                if(response.data.code === 200){
                    this.showSuccess = true;
                    this.available_points = response.data.available_points
                }
                else if(response.data.code === 405){
                    this.showFailure = true;
                    this.available_points = response.data.available_points

                }else{
                    this.showFailure = true;
                    this.available_points = response.data.available_points
                
                }

                this.isRedeemClicked = true; 
                
            })
            .catch(error => {
                console.log(error);
                this.available_points = error.request.response.available_points
                this.showFailure = true;
            });
        },
    }
}

</script>


<style>

* {
  font-family: 'Inter', sans-serif;
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