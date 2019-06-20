import Vue from 'vue'
import Router from 'vue-router'
import AdminHeader from '../components/admin/AdminHeader'
import MusicManage from '../views/admin/MusicManage'
import AdminIndex from '../views/admin/AdminIndex'
import UserManage from '../views/admin/UserManage'
import CommitManage from '../views/admin/CommitManage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/adminHeader',
      component: AdminHeader,
      name: 'AdminHeader',
      redirect: '/adminIndex',
      children: [
        {path: '/musicManage', name: 'musicManage', component: MusicManage},
        {path: '/adminIndex', name: 'adminIndex', component: AdminIndex},
        {path: '/userManage', name: 'userManage', component: UserManage},
        {path: '/commitManage', name: 'commitManage', component: CommitManage}
      ]
    }
  ],
  mode: 'history'
})
