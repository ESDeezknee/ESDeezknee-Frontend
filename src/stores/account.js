import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAccountStore = defineStore("account", {
  state: () => {
    const persistedState = JSON.parse(localStorage.getItem("accountStore")) || {
      loggedIn: false,
      account: null,
      group: '',
      queue: ''
    };
    return persistedState;
  },
  actions: {
    loginWithEmail(email) {
      const apiUrl = "http://127.0.0.1:6003/account/email/" + email;

      axios
        .get(apiUrl)
        .then((response) => {
          this.account = response.data.data;
          this.loggedIn = true;
          this.saveState();
        })
        .catch((error) => {
          return error.response.data.message;
        });
    },
    logout() {
      this.account = null;
      this.loggedIn = false;
      this.saveState();
    },
    saveState() {
      localStorage.setItem("accountStore", JSON.stringify(this.$state));
    },
    createGroup(group_id) {
      this.group = group_id;
      this.saveState();
    },
    createQueue(queue_id){
      this.queue = queue_id;
      this.saveState();
    }
  },
});
