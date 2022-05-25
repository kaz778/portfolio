import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Top from '../views/Top.vue'
import About from '../views/About.vue'
import Research from '../views/Research.vue'
import Skill from '../views/Skill.vue'
import Works from '../views/Works.vue'
import Contact from '../views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  },
  // {
  //   path: '/work',
  //   name: 'Works',
  //   component: Works
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
