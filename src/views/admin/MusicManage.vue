<template>
    <div class="ml-5">
      <div class="alert alert-secondary" role="alert" style="width: 920px; text-align: right; margin-left: -20px">
        <a href="#" class="btn btn-primary">添加专辑</a>
      </div>
      <div class="row">
        <div class="card" style="width: 18rem;" :class="index === 0 ? '': 'ml-4'" v-for="(album, index) in albums" :key="index">
          <div class="card-header">
            {{album.albumName}}
          </div>
          <router-link to="/adminHeader" tag="img" class="card-img-top" :src="album.coverPlot" alt="Card image cap"></router-link>
          <div class="card-body">
            <span class="card-title font-weight-light">{{album.author}}</span>
            <p class="card-text font-italic">{{album.desc}}</p>
            <footer class="blockquote-footer">{{album.publishDate}}</footer>
          </div>
        </div>
      </div>
      <div class="mt-2" style="margin-left: -15px; width: 912px">
        <div class="alert alert-secondary" role="alert" style="width: 910px; text-align: right;">
          <!-- Example single danger button -->
          <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              歌曲搜索
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">歌曲下载</a>
              <a class="dropdown-item" href="#">专辑搜索</a>
              <a class="dropdown-item" href="#">专辑下载</a>
            </div>
          </div>
        </div>
        <div class="card text-center ">
          <div class="card-header">
            歌曲搜索条形图
          </div>
          <div class="card-body">
            这是一张条形图
          </div>
        </div>
        <div class="mt-5">
          <div class="alert alert-secondary" role="alert" style="width: 910px; text-align: right;">
            <a href="#" class="btn btn-primary">上传歌曲</a>
          </div>
          <div class="card">
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
              <span class="font-weight-bold" style="font-size: 20px; ">曲库</span>
              <from class="float-right" action="/adminIndex" method="post">
                页数跳转：<input type="number" style="width: 40px"/>
                <input type="submit" class="btn btn-primary" value="跳转" />
              </from>
            </div>
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">歌名</th>
                  <th scope="col">作者</th>
                  <th scope="col">歌曲类型</th>
                  <th scope="col">上架时间</th>
                  <th scope="col"><button type="button" class="btn btn-primary">删除一页</button></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(song, index) in songs" :key="index">
                  <th scope="row"> {{index+1}}</th>
                  <td>{{song.songName}}</td>
                  <td>{{song.singer}}</td>
                  <td>{{song.songType}}</td>
                  <td>{{song.createDate}}</td>
                  <td><a href="#" class="card-link">删除</a><a href="#" class="card-link">修改</a></td>
                </tr>
                </tbody>
              </table>
              <a href="#" class="card-link">上一页</a>
              <a href="#" class="card-link">下一页</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Index from 'element-ui/src/utils/popup'
export default {
  name: 'MusicManage',
  components: {Index},
  data () {
    return {
      counter: 0,
      albums: [
        {
          coverPlot: require('../../assets/adminImage/6.jpg'),
          author: '张学友',
          albumName: '雪狼湖',
          publishDate: '2016-04-05',
          desc: '这是一张关于人狼之恋的专辑'
        },
        {
          coverPlot: require('../../assets/adminImage/5.jpg'),
          author: 'LadyGaGa',
          albumName: 'love story',
          publishDate: '2017-05-05',
          desc: 'how are you? I am fine, thanks. how are you? i am ok'
        },
        {
          coverPlot: require('../../assets/adminImage/7.jpg'),
          author: '蔡徐坤',
          albumName: '鸡你太美',
          publishDate: '2019-03-01',
          desc: '我喜欢唱，跳， rap， 篮球。 music..'
        }
      ],
      songs: [
        {songName: '透明的世界', singer: '秦基博', songType: '摇滚', createDate: '2016-05-04'},
        {songName: '直到世界尽头', singer: 'WANDS', songType: '流行音乐', createDate: '2016-06-04'},
        {songName: '好想大声说爱你', singer: 'BAAD', songType: '治愈系', createDate: '2017-05-04'},
        {songName: 'Monsters', singer: 'Katie Sky', songType: '流行音乐', createDate: '2018-05-04'},
        {songName: '邂逅', singer: '7!!', songType: '欧美风', createDate: '2016-05-14'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
