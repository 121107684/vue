import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import register from '@/components/login/register'
import resetpassword from '@/components/login/resetpassword'
import indexcontent from '@/components/indexcontent/indexcontent'
//问券模版
import ticketindex from '@/components/ticket/ticketindex'
import statistics from '@/components/ticket/statistics'
import editque from '@/components/ticket/editque'
import settingque from '@/components/ticket/settingque'

Vue.use(Router)

console.log(login)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
          name:'抽奖问券项目',
          path: '/',
          component: ticketindex,
          children:[{
            name:"答题统计",
            path:'/',
            component:statistics
          },
          {
            name:"编辑问题",
            path:'/editque',
            component:editque
          },
          {
            name:"活动设置",
            path:'/settingque',
            component:settingque
          }]
        }]
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
