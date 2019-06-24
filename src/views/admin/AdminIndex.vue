<template>
    <div class="ml-5">
      <div class="row">
        <div class="card col-sm-4">
          <div class="card-body">
            <img src="../../assets/adminImage/1.jpg" height="80" width="100" alt="Card image cap">
            <h5 class="card-title mt-2">今日访问量</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{visitors}}</h6>
          </div>
        </div>
        <div class="card col-sm-3 ml-4">
          <div class="card-body">
            <img src="../../assets/adminImage/2.jpg" height="80" width="100" alt="Card image cap">
            <h5 class="card-title mt-2">新用户</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{visitors}}</h6>
          </div>
        </div>
        <div class="card col-sm-3 ml-3">
          <div class="card-body">
            <img src="../../assets/adminImage/3.jpg" height="80" width="100" alt="Card image cap">
            <h5 class="card-title mt-2">上传音乐</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{visitors}}</h6>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="card" style="width: 600px">
          <div class="card-header">
            活跃用户
          </div>
          <div class="card-body">
              <table class="table">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">用户名</th>
                  <th scope="col">账号</th>
                  <th scope="col">vip等级</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user, index) in users" :key="index">
                  <th scope="row">{{index+1}}</th>
                  <td>{{user.userName}}</td>
                  <td>{{user.accouter}}</td>
                  <td>{{user.vip}}</td>
                </tr>
                </tbody>
              </table>
          </div>
        </div>
        <div class="card ml-3" style="width: 290px">
          <div class="card-header">
            歌曲热度
          </div>
          <div class="card-body">
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">歌名</th>
                <th scope="col">点击量</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(song, index) in songs" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{song.name}}</td>
                <td>{{song.clickNum}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="card" style="width: 905px">
          <div class="card-header">
            访问量统计
          </div>
          <div class="card-body">
            这是一张表
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AdminIndex',
  data () {
    return {
      visitors: 12,
      users: [
        {userName: 'Tom', accouter: '123456', vip: '6'},
        {userName: 'Jack', accouter: '123456', vip: '5'},
        {userName: 'Julet', accouter: '123456', vip: '6'},
        {userName: 'Chen', accouter: '123456', vip: '4'},
        {userName: '小明', accouter: '123456', vip: '0'}
      ],
      songs: [
        {name: '爱情是伤感的', clickNum: '10000'},
        {name: '山路十八弯', clickNum: '9886'},
        {name: 'we can not stop', clickNum: '7500'},
        {name: '青鸟', clickNum: '6501'},
        {name: '9527', clickNum: '6500'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
