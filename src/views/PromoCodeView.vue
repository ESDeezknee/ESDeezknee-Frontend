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
                <label for="promo-code" style="font-size:small;"><strong>Enter Promo Code:</strong></label>
                <input type="text" class="form-control border border-secondary mt-3" id="promo-code"
                style="text-align:center;font-size:larger;border:none;">
                </div>
            </div>

            <button class="btn btn-success w-100 mb-2 mt-4 " style="font-size:small;">
                Redeem Now
            </button>

        </div>
    </div>  

        <div class="text-center">
            <router-link to="/payment-mode" class="fw-semibold mb-2 w-100"
            style="color: rgb(2 132 199); font-size:x-small"
            onmouseover="this.style.backgroundColor='#f1f5f9';" onmouseout="this.style.backgroundColor='#fff';">
            Cancel
        </router-link>

        </div>
        
    </MobileTemplate>
</template>

<script>
import MobileTemplate from '../components/MobileTemplate.vue';

export default {
    name: 'PaymentModeView',
    components: {
        MobileTemplate
    },
    props: {
        title: {
            type: String,
            default: 'Redeem Promo Code'
        }
    },
}
</script>

<style>
</style>