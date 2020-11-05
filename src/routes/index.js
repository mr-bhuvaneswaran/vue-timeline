import Main from '../components/Main.vue'
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Main,
  },
];

const router = new VueRouter({
  routes 
})

export default router;