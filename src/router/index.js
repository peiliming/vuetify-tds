import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

import TopSection from "../components/TopSection.vue"
import FirstStep from '../components/FirstStep.vue'
import SecondStep from '../components/SecondStep.vue'
import ThirdStep from '../components/ThirdStep.vue'
import FourthStep from '../components/FourthStep.vue'
import FifthStep from '../components/FifthStep.vue'
import SixthStep from '../components/SixthStep.vue'
import SeventhStep from '../components/SeventhStep.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "topSection",
    component: TopSection
  },
  {
    path: '/first-step',
    name: 'firstStep',
    component: FirstStep
  },
  {
    path: '/second-step',
    name: 'secondStep',
    component: SecondStep
  },
  {
    path: '/third-step',
    name: 'thirdStep',
    component: ThirdStep
  },
  {
    path: '/fourth-step',
    name: 'fourthStep',
    component: FourthStep
  },
  {
    path: '/fifth-step',
    name: 'fifthStep',
    component: FifthStep
  },
  {
    path: '/sixth-step',
    name: 'sixthStep',
    component: SixthStep
  },
  {
    path: '/seventh-step',
    name: 'seventhStep',
    component: SeventhStep
  },
]

const router = new VueRouter({
  routes
})

export default router
