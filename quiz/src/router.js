import Vue from 'vue'
import Router from 'vue-router'
import Intro from './pages/Intro'
import Settings from './pages/Settings'
import Layout from './pages/Layout'
import Wrong from './pages/Wrong'
import Game from './pages/Game'
import Won from './pages/Won'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro,
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/game',
          name: 'game',
          component: Game,
        },
        {
          path: '/won',
          name: 'won',
          component: Won,
        },
        {
          path: '/wrong',
          name: 'wrong',
          component: Wrong,
        },
        {
          path: '/settings',
          name: 'settings',
          component: Settings,
        },
      ]
    }
  ]
})

export default router;