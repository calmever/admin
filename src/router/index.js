import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

const login = () => import("../views/login")
const home = () => import("../views/home/home")
const user = () => import("../views/home/child/user")
const info = () => import("../views/info/info")
const shape = ()=> import("../views/shape/shape")
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/info'
  },
  {
    name: "login",
    path: "/login",
    component: login
  },
  {
    name: "home",
    path: '/home',
    component: home,
    children: [
      {
        name: "user",
        path: '/user',
        component: user
      },
      {
        name: "info",
        path: "/info",
        component: info
      },
       {
        name: "shape",
        path: "/shape",
        component: shape
      },
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})
router.beforeEach(function(to,from,next){
    if(store.state.userinfo||to.path==='/login'){
      next();
    }
    else {
      next({path:'/login'})
    }
})

export default router
