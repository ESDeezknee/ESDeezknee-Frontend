<template>
    <MobileTemplate>
        <div class="mt-4">
            <router-link to="/payment-mode" class="back-btn mb-2 w-20 bg-light border-0 " style="font-size:x-small; font-weight: 900;">
                <i class="bi bi-chevron-left"></i>
            </router-link>
            <h5 class="d-flex justify-content-center mt-4">{{ title }}</h5>
        </div>

        <div class="d-flex justify-content-center mt-4">
        <lottie-player src=https://assets10.lottiefiles.com/packages/lf20_UxxbmM.json background="transparent" speed="1"
            style="width: 200px; height:180px;" loop autoplay></lottie-player>
        </div>


        <div class="card border-0">
            <div class="card-body bg-light">


            <div class="d-flex flex-column align-items-center">
                <div class="form-group">
                <label for="promo_code" style="font-size:small;"><strong>Enter Promo Code:</strong></label>
                <input type="text" class="form-control border border-secondary mt-3" id="promo_code" v-model="promo_code"
                style="text-align:center;font-size:larger;border:none;">
                </div>
            </div>

            <button class="btn btn-success w-100 mb-2 mt-4 " style="font-size:small;" @click="payWithPromoCode">
                Redeem Now
            </button>

        </div>
    </div>  

    <!-- Pop up message: join successful  -->
    <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showSuccess">
      <p class="notification-title d-flex justify-content-center fw-bolder" style="color: #38b000; font-size:MEDIUM">SUCCESS! &nbsp;🤩</p>
      <button @click="showSuccess = false; ; $router.push('/queue-ticket')" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
      <hr>
      <p class="text-center" style="font-size:small;" >{{pass_message}}</p>
    </div>

    <!-- Pop up message: join failure  -->
    <div class="notification-box position-absolute top-50 start-20" id="notification-box" v-if="showFailure">
      <p class="notification-title d-flex justify-content-center fw-bolder" style="font-size:medium; color:#dc3545">ERROR! &nbsp;😕</p>
      <button @click="showFailure = false" type="button" class="btn-close d-flex justify-content-right " aria-label="Close"></button>
      <hr>
      <p class="text-center" style="font-size:small;" >{{fail_message}}</p>
    </div>


        
    </MobileTemplate>
</template>

<script>
import MobileTemplate from '../components/MobileTemplate.vue';
import { useAccountStore } from "@/stores/account";
import axios from 'axios';

export default {
    name: 'PaymentModeView',
    components: {
        MobileTemplate
    },
    data() {
        return {
            title: 'Redeem Promo Code',
            promo_code: '',
            showSuccess: false,
            showFailure: false,
            pass_message: '',
            fail_message: ''
        }
    },
    props: {
        title: {
            type: String,
            default: 'Redeem Promo Code'
        }
    },
    setup() {
    const accountStore = useAccountStore();

    return { accountStore };
  },
 
    methods:{
        payWithPromoCode() {
            const api_url = "http://127.0.0.1:6201/order/get_payment_method/" + this.accountStore.account.account_id;
            const body = {
                payment_method: 'promo',
                promo_code: this.promo_code,
            };

            axios.post(api_url, body)
            .then(response => {
                console.log(response.data)
                const promo = response.data.data.promo_code // the code that the user has 

                console.log('user has this code:' + promo)
                console.log('user keyed in:' + this.promo_code)

                if(this.promo_code == ''){
                    this.fail_message = 'Please enter a promo code.'
                    this.showFailure = true
                }else if(this.promo_code !== promo){
                    this.fail_message = 'You have keyed in an invalid promo code. Please try again.'
                    this.showFailure = true
                }else{
                    const msg = response.data.message
                    this.pass_message = msg + "!"
                    this.showSuccess = true
                    this.queue = response.data.queue_id
                    this.accountStore.createQueue(
                       this.queue 
                    );
                    console.log(this.queue)
                }
            
                }

            )
            .catch(error => {
                console.log(error);
                this.fail_message = "Failed to redeem promo code. Please try again."
                this.showFailure = true

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