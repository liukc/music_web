// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  var userStr = sessionStorage.getItem('user')
  var user = JSON.parse(userStr)
  if (to.path === '/login' || to.path === '/') {
    if (user === null) {
      next()
    } else {
      alert('请先注销')
    }
  } else if (to.path === '/register') {
    if (user === null) {
      alert('请先登录')
      next('/login')
    } else {
      next()
    }
  } else {
    if (user === null) {
      alert('请先登陆')
      next('/login')
    } else {
      if (user.userType === 0) {
        next()
      } else {
        alert('权限不够，申请为管理员')
        next('/register')
      }
    }
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
