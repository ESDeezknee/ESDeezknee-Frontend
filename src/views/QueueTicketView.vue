<template>
  <MobileTemplate>
    <div class="mobile-header" style="display: flex">
      <div class="text-center" style="margin-top: 150px">
        <h2>Your Express Queue Number is:</h2>
        <div class="queue" style="margin-top: 50px">
          <p class="text-center mx-auto" style="font-size: xxx-large">
            {{ queue_num }}
          </p>
        </div>
      </div>
    </div>

    <button
      :class="['btn w-100 mt-2', buttonClass]"
      style="font-size: small"
      @click="useTicket()"
      :disabled="isUsed"
    >
      {{ isUsed ? "Ticket Used" : showSuccess ? "Ticket Used" : "Use Ticket" }}
    </button>

    <!-- {{ isUsed }} -->

    <!-- Pop up message: broadcast successful -->
    <div
      class="notification-box position-absolute top-50 start-20"
      id="notification-box"
      v-if="showSuccess"
    >
      <p
        class="notification-title d-flex justify-content-center fw-bolder"
        style="color: #38b000; font-size: MEDIUM"
      >
        AWESOME! &nbsp;😊
      </p>
      <button @click="showSuccess = false; $router.push('/home');"
        type="button"
        class="btn-close d-flex justify-content-right"
        aria-label="Close"
      ></button>
      <hr />
      <p class="text-center" style="font-size: small">{{ message }}</p>
    </div>
  </MobileTemplate>
</template>

<script>
import MobileTemplate from "../components/MobileTemplate.vue";
import { useAccountStore } from "@/stores/account";
import axios from "axios";

export default {
  name: "QueueTicketView",
  components: {
    MobileTemplate,
  },
  data() {
    return {
      queue_num: this.accountStore.queue,
      message: "",
      isUsed: false,
      showSuccess: false,
    };
  },
  setup() {
    const accountStore = useAccountStore();

    return { accountStore };
  },
  created() {
    console.log(this.accountStore.queue);
  },
  computed: {
    buttonClass() {
      if (this.isUsed) {
        return "btn-secondary";
      } else {
        return "btn-success";
      }
    },
  },

  methods: {
    useTicket() {
      const body = {
        queue_id: this.accountStore.queue,
        is_used: true,
      };
      const url =
        "http://127.0.0.1:8000/api/v1/order/" +
        this.accountStore.queue +
        "/used";

      axios
        .patch(url, body)
        .then((response) => {
          this.isUsed = response.data.data.is_used;
          console.log(this.isUsed);
          if (this.isUsed == true) {
            this.message = response.data.message;
            this.showSuccess = true;
            console.log(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.mobile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.queue {
  content: "";
  display: block;
  width: 200px;
  height: 80px;
  background-color: #e5e5e5;
  justify-content: center;
  text-align: center;
  border-radius: 80px;
  margin-bottom: 50px;
  margin-top: 50px;
  margin: auto;
}
</style>
