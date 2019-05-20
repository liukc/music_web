<template>
  <div class="layout backgroupImages">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="list-group col-sm-2">
        <router-link class="mb-1 list-group-item list-group-item-action" tag="button" :class="isActive === index ? 'active' : ''"
                     @click.native="changeActive(item,index)" v-for="(item, index) in liName" :key="index" :to="toWhere[index]"
                     >
          {{item}}
        </router-link>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminHeader',
  data () {
    return {
      isActive: 0,
      toWhere: ['/adminIndex', '/musicManage', '/userManage', '/commitManage'],
      liName: ['后台首页', '音乐管理', '用户管理', '评论管理']
    }
  },
  methods: {
    changeActive: function (item, index) {
      this.isActive = index
    }
  }
}
</script>

<style scoped>
  .backgroupImages{
    background: #eee;
    width: auto;
    height: auto;
  }
  .layout{
    padding: 50px 50px 0px;
  }

</style>
