import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from 'pages/home/home.vue'
import cinema from '../components/pages/cinema/cinema.vue'
import movie from '../components/pages/movie/movie.vue'
import my from '../components/pages/my/my.vue'
Vue.use(Router)

export default new Router({
  routes: [
 /*   {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {path: '/home',  component: home},
    {path: '/cinema',  component: cinema},
    {path: '/movie',  component: movie},
    {path: '/my',  component: my},

  ]
})
