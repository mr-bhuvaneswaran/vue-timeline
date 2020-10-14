import TimeLine from '../components/TimeLine.vue'
import DashBoard from '../components/DashBoard.vue'
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/timeline",
    name: "TimeLine",
    component: TimeLine,
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