import { createRouter, createWebHistory } from 'vue-router'
const MainLayout = () => import("../layouts/MainLayout");

// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: "/",
        name: 'main',
        component: () => import("../components/Main")
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
