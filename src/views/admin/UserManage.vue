<template>
  <div class="ml-5">
    <div class="row">
      <div class="card" :class="0 === index ? '': 'ml-3'" style="width: 18rem;"
           v-for="(statisticDatum, index) in statisticData" :key="index">
        <div class="card-body">
          <h5 class="card-title">{{statisticDatum.name}}</h5>
          {{statisticDatum.number}}
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="card" style="width: 897px">
        <h5 class="card-header">访问量统计</h5>
        <div class="card-body">

          <img src="../../assets/adminImage/9.jpg" height="400" width="850"/></div>
      </div>
    </div>
    <div class="mt-2 mb-5" style="margin-left: -15px">
      <div class="card" style="width: 898px">
        <div class="card-header">
          <span class="float-left">
          每页显示：
          <select class="custom-select" style="width: 60px;">
          <option selected>5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
            </span>
          <span class="font-weight-bold" style="font-size: 20px; ">用户</span>
          <from class="float-right" action="/adminIndex" method="post">
            页数跳转：<input type="number" style="width: 40px"/>
            <input type="submit" class="btn btn-primary" value="跳转"/>
          </from>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col">用户名</th>
              <th scope="col">账号</th>
              <th scope="col">性别</th>
              <th scope="col">用户类别</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{user.nickname}}</td>
              <td>{{user.id}}</td>
              <td v-if="user.gender === 1">男</td>
              <td v-else>女</td>
              <td v-if="user.userType === 0">管理员</td>
              <td v-else>普通用户</td>
              <td><button class="btn btn-link" @click="deleteUser(user.id)">删除</button></td>
            </tr>
            </tbody>
          </table>
          <a href="#" class="card-link">上一页</a>
          <a href="#" class="card-link">下一页</a>
        </div>
      </div>
    </div>
    <div class="mt-2 mb-5" style="margin-left: -15px">
      <div class="card" style="width: 898px">
        <div class="card-header">
          <span class="float-left">
          每页显示：
          <select class="custom-select" style="width: 60px;">
          <option selected>5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
            </span>
          <span class="font-weight-bold" style="font-size: 20px; ">管理员审批</span>
          <from class="float-right" action="/adminIndex" method="post">
            页数跳转：<input type="number" style="width: 40px"/>
            <input type="submit" class="btn btn-primary" value="跳转"/>
          </from>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col">用户名</th>
              <th scope="col">账号</th>
              <th scope="col">性别</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(preManager, index) in preManagers" :key="index">
              <td>{{preManager.nickname}}</td>
              <td>{{preManager.id}}</td>
              <td v-if="preManager.gender === 1">男</td>
              <td v-else>女</td>
              <td>
                <button class="btn btn-link" @click="registerAudit(preManager.id, 1)">同意</button>
                <button class="btn btn-link" @click="registerAudit(preManager.id, 0)">不同意</button>
              </td>
            </tr>
            </tbody>
          </table>
          <a href="#" class="card-link">上一页</a>
          <a href="#" class="card-link">下一页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../API/axios-auth'
export default {
  name: 'UserManage',
  data () {
    return {
      statisticData: [
        {name: '今日游客', number: '120'},
        {name: '新用户', number: '150'},
        {name: '活跃用户', number: '250'}
      ],
      users: [],
      pages: 1, // 获取用户数据当前页面
      preManagers: [],
      preManagersPages: 1
    }
  },
  created () {
    axios.get('/userManage/getInitUsers').then((res) => {
      console.log(res)
      this.users = res.data.detail.users
      this.preManagers = res.data.detail.preManagers
    })
  },
  methods: {
    deleteUser: function (data) {
      let form = new FormData()
      form.append('id', data)
      axios.post('/userManage/deleteUser', form).then((res) => {
        if (res.data.code === 200) {
          alert('删除成功')
        } else {
          alert('删除失败')
        }
        // 刷新页面
        this.$router.go(0)
      })
    },
    registerAudit: function (id, audit) {
      let form = new FormData()
      form.append('id', id)
      form.append('answer', audit)
      axios.post('/userManage/registerAudit', form).then((res) => {
        if (res.data.code === 200) {
          alert('审批成功')
        } else {
          alert('审批失败')
        }
        // 刷新页面
        this.$router.go(0)
      })
    }
  }
}

</script>

<style scoped>
</style>
