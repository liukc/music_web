<template>
  <div class="backBlank">
    <form>
      <div class="form-group row">
        <label for="inputaccount3" class="col-sm-3 col-form-label">手机号码</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="inputaccount3" placeholder="输入手机号码">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputpassword3" class="col-sm-3 col-form-label">电子邮箱</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" id="inputpassword3" placeholder="输入电子邮箱">
        </div>
      </div>
      <div class="form-group row">
        <label for="repeatpassword3" class="col-sm-3 col-form-label">身份证号</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" id="repeatpassword3" placeholder="输入身份证号">
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-lg btn-block mt-5" @click="registerToManager()">注册成为管理员</button>
    </form>
  </div>
</template>

<script>
import axios from '../API/axios-auth'
export default {
  name: 'Register',
  methods: {
    registerToManager: function () {
      var userStr = sessionStorage.getItem('user')
      var user = JSON.parse(userStr)
      let form = new FormData()
      form.append('id', user.id)
      axios.post('/userManage/register', form).then((res) => {
        if (res.data.code === 200) {
          alert('申请成功，两个工作日内答复，请稍等。。。')
        } else {
          alert('申请失败')
        }
      })
    }
  }
}
</script>

<style scoped>
  .backBlank{
    width: 90%;
    height: 400px;
    margin-top: 100px;
    background: rgba(0,0,0,0.1);
    padding: 80px 30px 0px;
  }
</style>
