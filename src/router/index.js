import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChallengeView from "../views/ChallengeView.vue";
import ActiveChallengesView from "../views/ActiveChallenges.vue";
import RewardView from "../views/RewardView.vue";
import RedemptionView from "../views/RedemptionView.vue";
import CreateGroupView from "../views/CreateGroupView.vue";
import InputGroupView from "../views/InputGroupView.vue";
import AllGroupsView from "../views/AllGroupsView.vue";
import BroadcastView from "../views/BroadcastView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/challenge",
      name: "challenge",
      component: ChallengeView,
    },
    {
      path: "/active-challenges",
      name: "active-challenges",
      component: ActiveChallengesView,
    },
    {
      path: "/reward",
      name: "reward",
      component: RewardView,
    },
    {
      path: "/redemption",
      name: "redemption",
      component: RedemptionView,
    },
    {
      path: "/create-group",
      name: "create-group",
      component: CreateGroupView,
    },
    {
      path: "/input-group",
      name: "input-group",
      component: InputGroupView,
    },
    {
      path: "/all-groups",
      name: "all-groups",
      component: AllGroupsView,
    },
    {
      path: "/broadcast/:group_id",
      name: "broadcast",
      component: BroadcastView,
    },
  ],
});

export default router;
