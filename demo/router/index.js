import Vue from 'vue'
import Router from 'vue-router'
import DemoOne from '@/components/DemoOne'
import DemoTwo from '@/components/DemoTwo'
import DemoThree from '@/components/DemoThree'
import DemoFour from '@/components/DemoFour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'demo-one'}
    },
    {
      path: '/1',
      name: 'demo-one',
      component: DemoOne
    },
    {
      path: '/2',
      name: 'demo-two',
      component: DemoTwo
    },
    {
      path: '/3',
      name: 'demo-three',
      component: DemoThree
    },
    {
      path: '/4',
      name: 'demo-four',
      component: DemoFour
    }
  ]
})
