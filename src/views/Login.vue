<template>
  <div class="container backBlank">
    <form @submit.prevent="adminLogin()">
    <div class="input-group sm-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">账号</span>
      </div>
      <input v-model="user.username" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group sm-3 mt-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default1">密码</span>
      </div>
      <input v-model="user.password" autocapitalize="on" type="password" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default1">
    </div>
    <div class="mt-4 ml-4">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label mr-5" for="exampleCheck1">记住密码</label>
        <span class="ml-5"><a href="#">忘记密码?</a></span>
      </div>
      <div class="mt-3">
        <button type="submit" class="btn btn-primary mr-3">登陆</button>
        <span class="ml-5">还没有账号？<router-link to="/register">点击注册</router-link></span>
      </div>
    </div>
  </form>
  </div>
</template>

<script>
import axios from '../API/axios-auth'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    adminLogin: function () {
      let formData = new FormData()
      formData.append('username', this.user.username)
      formData.append('password', this.user.password)
      axios.post('/userManage/login', formData).then((res) => {
        if (res.data.code === 200) {
          sessionStorage.setItem('user', JSON.stringify(res.data.detail.user))
          // console.log(sessionStorage.getItem('user'))
          this.$router.push('/adminIndex')
        } else {
          alert(res.data.message)
        }
      })
    }
  }
}
</script>

<style scoped>
  .backBlank{
    width: 80%;
    height: 300px;
    margin-top: 100px;
    background: rgba(0,0,0,0.1);
    padding: 70px 30px 0px;
  }
</style>
