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
                    <span style="font-size:small;"><strong>Price:</strong> {{price}}</span><br>
                    <span style="font-size:small;"><strong>Points Available:</strong> {{this.points}}</span><br>
                    <button class="btn btn-success w-100 mb-2" style="font-size:small;">
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

         <!-- Pop up message: join failure  -->
    <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showFailure">
      <p class="notification-title d-flex justify-content-center fw-bolder" style="font-size:medium; color:#dc3545">ERROR! &nbsp;<i class="bi bi-emoji-frown"></i></p>
      <button @click="showFailure = false" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
      <hr>
      <p class="text-center" style="font-size:small;" >You have insufficient points available to redeem the tickets.</p>
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
            points: '' ,
            showFailure: false,

        };
    },
    setup() {
    const accountStore = useAccountStore();

    return { accountStore };
  },
    async created () {
        this.getLoyaltyPoints();
    },
    methods:{
        getLoyaltyPoints(){
            const url = "http://127.0.0.1:6201/order/get_payment_method/4";

            axios.post(url)
            .then((response) => {
                console.log(response.data)
                this.points = response.data.available_points;
                // console.log(this.points)
                this.showFailure = false;
                
            })
            .catch((error) => {
                console.log(error.message);
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

</style>