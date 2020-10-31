import DashBoard from '../components/DashBoard.vue'
import VueRouter from "vue-router";
import AllMeetings from '../components/AllMeetings.vue'

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/all-meetings",
    name: "AllMeetings",
    component: AllMeetings,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: DashBoard,
  },
];

const router = new VueRouter({
  routes 
})

export default router;