import Vue from 'vue'
import Router from 'vue-router'
import Game from './pages/Game';
import Layout from './pages/Layout';
import Intro from '@/pages/Intro';
import Won from '@/pages/Won';

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
          name: 'game',
          component: Game,
          path: '/game',
        },
        {
          name: 'won',
          component: Won,
          path: '/won',
        },
        {
          name: 'settings',
          component: Won,
          path: '/settings',
        },
      ]
    }
  ]
})

export default router
