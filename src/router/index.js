import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import register from '@/components/login/register'
import resetpassword from '@/components/login/resetpassword'
import ticketindex from '@/components/ticket/ticketindex'
import editque from '@/components/ticket/editque'
import settingque from '@/components/ticket/settingque'
Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index,
        children: [{
            name: '抽奖问券项目',
            path: '/ticketindex',
            component: ticketindex,
            children: [{
                name: "答题统计",
                path: '/',
                component: () => import('@/components/ticket/statistics')
            },
            {
                name: "编辑问题",
                path: '/ticketindex/editque',
                component: editque
            },
            {
                name: "活动设置",
                path: '/ticketindex/settingque',
                component: settingque
            }]
        }, {
            path: '/jx3',
            name: '基三啪啪啪',
            component: () => import('@/components/jxgame/index')
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