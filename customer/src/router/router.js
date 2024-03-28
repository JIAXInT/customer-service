// router.js
import { createRouter, createWebHistory } from "vue-router";
import client from "@/pages/client.vue";
import customer from "@/pages/customer.vue";

const routes = [
  {
    path: "/",
    name: "client",
    component: client,
  },
  {
    path: "/customer",
    name: "customer",
    component: customer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
