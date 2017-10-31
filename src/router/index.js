import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import register from '@/components/login/register'
import resetpassword from '@/components/login/resetpassword'
import indexcontent from '@/components/indexcontent'

Vue.use(Router)

console.log(login)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
          path: '/',
          component: indexcontent,
        }
      ]
    },
    {
      path: '/login',
      name: 'lgoin',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: resetpassword
    }
  ]
})
