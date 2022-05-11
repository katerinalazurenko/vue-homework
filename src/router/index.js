import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/About/AboutView.vue'
import NotFound from '../views/NotFoundView.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'

Vue.use(Router)

const routes = [
  {
    path: "/dashboard/:page/",
    name: "Dashboard",
    component: HomeView ,
  },
  {
    path: '/about',
    name: "About",
    component: AboutView,

  },
  {
    path: '/notfound',
    name: "NotFound",
    component: NotFound
  },
  {
    path: '/add/:section/:category',
    name: "AddPaymentForm",
    component: AddPaymentForm
  },
  {
    path: '*',
    redirect: {name: 'NotFound'}
  },
]

const router = new Router({
  mode: "history",
  routes
})

const userAuthExists = true 

router.beforeEach((to, from, next)=>{
  if(to.name !== 'NotFound' && !userAuthExists) {
    next({name: 'NotFound'})
  }else {
    next()
  }
})

router.beforeResolve((to, from, next)=>{
  // console.log(to, from)
  next()
})

const getTitleByRouteName = (routeName)=>{
  return {
    'Dashboard': 'Take a look on your payments and add more!',
    'About': 'Anything about our awesome application!',
    'NotFound': 'Oops! Seems like we lost this page :('
    }[routeName]
}

router.afterEach((to)=>{
  document.title = getTitleByRouteName(to.name)
})

export default router;