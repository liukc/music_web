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
        <h5 class="card-header">用户统计</h5>
        <div class="card-body">
          这里是一张统计图
        </div>
      </div>
    </div>
    <div class="mt-2" style="margin-left: -15px">
      <div class="card" style="width: 898px">
        <div class="card-header">
          <span class="float-left">
          每页显示：
          <select class="custom-select" style="width: 60px;">
          <option selected>5</option>
          <option value="1">10</option>
          <option value="2">20</option>
          <option value="3">25</option>
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
              <th scope="col">#</th>
              <th scope="col">用户名</th>
              <th scope="col">账号</th>
              <th scope="col">性别</th>
              <th scope="col">注册时间</th>
              <th scope="col">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <th scope="row"> {{index+1}}</th>
              <td>{{user.name}}</td>
              <td>{{user.province}}</td>
              <td>{{user.city}}</td>
              <td>{{user.date}}</td>
              <td><a href="#" class="card-link">停用</a><a href="#" class="card-link">修改</a></td>
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
export default {
  name: 'UserManage',
  data () {
    return {
      statisticData: [
        {name: '今日游客', number: '120'},
        {name: '新用户', number: '150'},
        {name: '活跃用户', number: '250'}
      ],
      users: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  }
}
</script>

<style scoped>
</style>
