import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login.vue'


import index from '@/components/index.vue'
import reg from '@/components/reg.vue'
import aaa from '@/components/aaa.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/reg',
      name: 'reg',
      component:reg
    },
    {
      path: '/aaa',
      name: 'aaa',
      component:aaa
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
   
   
    
   
    {
      path:"*",
      component:{
        template:`<h2 style="color:red">404:Not Found----这是东哥写的，不是报错</h2>
        ` 
      }
    },

  ]
})
