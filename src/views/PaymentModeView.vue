<template>
    <MobileTemplate>
        <div class="mt-4">
            <router-link to="/ride" class="back-btn mb-2 w-20 bg-light border-0 " style="font-size:x-small; font-weight: 900;">
                <i class="bi bi-chevron-left"></i>
            </router-link>
            <h5 class="d-flex justify-content-center mt-4">{{ title }}</h5>


            <div class="card border-0" style="padding-top: 0;">
            <div class="card-body bg-light">
                <div class="d-flex flex-column align-items-center mt-4">
                <p style="font-size: small"><strong>Please select a payment method:</strong></p>
                <button class="btn btn-primary mb-2 w-100 mt-3" style="font-size:small" @click="redirectToStripeCheckout">Credit Card (Stripe)</button>
                <router-link to="/loyalty-points" class="btn btn-primary mb-2 w-100 mt-4" style="font-size:small">Loyalty Points</router-link>
                <router-link to="/promo-code" class="btn btn-primary w-100 mt-4 mb-3" style="font-size:small">Promo Code</router-link>
                </div>
            </div>
            </div>
    

        </div>
    </MobileTemplate>
</template>


<script>
import MobileTemplate from '../components/MobileTemplate.vue';
import axios from 'axios';

export default {
    name: 'PaymentModeView',
    components: {
        MobileTemplate
    },
    data() {
        return {
            paymentModes: [],
        };
    },
    props: {
        title: {
            type: String,
            default: 'Modes of Payment'
        }
    },
    created() {
        // this.getPaymentModes();
    },
    methods: {
        redirectToStripeCheckout() {
      
            window.location.href = "https://checkout.stripe.com/c/pay/cs_test_a14BL4fVRIr29b3kT2jCUWbv8htW8my165rxzXiiIBc0Qyuov7pGebZAcN#fidkdWxOYHwnPyd1blpxYHZxWjA0SG9gNzBAfVBcR3BIbXFtZkBHPVFqTjFBM3NLdTNpQmJ2VWo8U0c8NklGVXVXUDFjalNDd3dDMzJ0Z3JRU0BxQXIzRzNONjFvNUNxVkZjV2hKV1BHRmwxNTV3UkZtUTRvRicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl";
        }

    }
}
</script>

<style>
* {
  font-family: 'Inter', sans-serif;
}


.card{
    padding-top: 0;
}
</style>