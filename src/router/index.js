import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Trivia from '../views/Trivia.vue'
import TriviaType1 from '../views/TriviaType1.vue'
import TriviaType2 from '../views/TriviaType2.vue'
import Timer from '../views/Timer.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/trivia',
    name: 'trivia',
    component: Trivia
  },
  {
    path: '/trivia1',
    name: 'trivia1',
    component: TriviaType1
  },
  {
    path: '/trivia2',
    name: 'trivia2',
    component: TriviaType2
  },
  {
    path: '/timer',
    name: 'timer',
    component: Timer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
