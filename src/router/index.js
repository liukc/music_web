import Vue from 'vue'
import Router from 'vue-router'
import AdminHeader from '../components/admin/AdminHeader'
import MusicManage from '../views/admin/MusicManage'
import AdminIndex from '../views/admin/AdminIndex'
import UserManage from '../views/admin/UserManage'
import CommitManage from '../views/admin/CommitManage'
import Login from '../views/Login'
import Register from '../views/Register'
import BackGroudImage from '../components/BackGroudImage'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/adminHeader',
      component: AdminHeader,
      redirect: '/adminIndex',
      children: [
        {path: '/musicManage', name: 'MusicManage', component: MusicManage},
        {path: '/adminIndex', name: 'AdminIndex', component: AdminIndex},
        {path: '/userManage', name: 'UserManage', component: UserManage},
        {path: '/commitManage', name: 'CommitManage', component: CommitManage}
      ]
    },
    {
      path: '/backgroudImage',
      name: 'BackGroudImage',
      component: BackGroudImage,
      children: [
        {path: '/login', name: 'Login', component: Login},
        {path: '/register', name: 'Register', component: Register}
      ]
    }
  ],
  mode: 'history'
})
