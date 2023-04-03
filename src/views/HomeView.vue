<template>

    <MobileTemplate>
        <div class="mt-4 ">
            <router-link to="/ride" class="back-btn mb-2 w-20 bg-light border-0 " style="font-size:x-small; font-weight: 900;">
                <i class="bi bi-chevron-left"></i>
            </router-link>
            <h5 class="d-flex justify-content-center mt-4">{{ title }}</h5>
            <div class="d-flex justify-content-center position-relative">
              <lottie-player src=https://assets3.lottiefiles.com/packages/lf20_mjrqxips.json background="transparent" speed="1"
              style="width: 200px; height:150px;" loop autoplay></lottie-player>
            </div>

            <div class="card border-0">
            <div class="card-body bg-light">
                <div class="d-flex flex-column align-items-center mt-4">
                <p style="font-size: small"><strong>Select an option to begin:</strong></p>
                <router-link to="/group" class="btn btn-primary mb-2 w-100 mt-4" style="font-size:small">Create and Find Groups</router-link>
                <router-link to="/ride" class="btn btn-primary mb-2 w-100 mt-4" style="font-size:small">Buy Express Tickets</router-link>
                <router-link to="/challenge" class="btn btn-primary w-100 mt-4 mb-3" style="font-size:small">Challenges and Redemptions</router-link>
                </div>
            </div>
            </div>
    

        </div>
    </MobileTemplate>
</template>

<script>
import MobileTemplate from '../components/MobileTemplate.vue';
export default {
    name: 'HomeView',
    components: {
        MobileTemplate
    },
    props: {
        title: {
            type: String,
            default: 'Welcome to ESDeezknee!'
        }
    },
}

</script>

<style>

* {
  font-family: 'Inter', sans-serif;
}

</style>
