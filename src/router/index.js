import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChallengeView from "../views/ChallengeView.vue";
import ActiveChallengesView from "../views/ActiveChallenges.vue";
import RewardView from "../views/RewardView.vue";
import RedemptionView from "../views/RedemptionView.vue";
import GroupView from "../views/GroupView.vue";
import InputGroupView from "../views/InputGroupView.vue";
import AllGroupsView from "../views/AllGroupsView.vue";
import BroadcastView from "../views/BroadcastView.vue";
import LoginView from "../views/LoginView.vue";
import RideView from "../views/RideView.vue";
import PaymentModeView from "../views/PaymentModeView.vue";
import LoyaltyPointsView from "../views/LoyaltyPointsView.vue";
import PromoCodeView from "../views/PromoCodeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
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
      path: "/group",
      name: "group",
      component: GroupView,
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
      // path: "/broadcast/:group_id",
      path: "/broadcast",
      name: "broadcast",
      component: BroadcastView,
    },
    {
      path: "/ride",
      name: "ride",
      component: RideView,
    },
    {
      path: "/payment-mode",
      name: "payment-mode",
      component: PaymentModeView
    },
    {
      path: "/loyalty-points",
      name: "loyalty-points",  
      component: LoyaltyPointsView
    },
    {
      path: "/promo-code",
      name: "promo-code",
      component: PromoCodeView
    }
  ],
});

export default router;
