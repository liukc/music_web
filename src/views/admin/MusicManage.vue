<template>
    <div class="ml-5">
      <div class="alert alert-secondary" role="alert" style="width: 920px; text-align: right; margin-left: -20px">
        <!-- 激活 modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          添加歌单
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel" v-if="songList.id === ''">添加歌单</h5>
                <h5 class="modal-title" v-else>修改歌单</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!--<form action="http://localhost:8080/musicManage/setSongSheet" method="post" enctype="multipart/form-data" @submit.prevent="">-->
                <form @submit.prevent="createOrUpdate()">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button">歌单名称</button>
                  </div>
                  <input v-model="songList.songListName" type="text" class="form-control"
                         aria-describedby="basic-addon1" title="输入名称" :placeholder=songList.songListName>
                  <span class="badge badge-danger ml-2" style="line-height: 30px" v-if="songList.songListName === ''">不能为空</span>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button">描述信息</button>
                  </div>
                  <textarea v-model="songList.listDesc" class="form-control" aria-label="With textarea" :placeholder=songList.listDesc></textarea>
                  <span class="badge badge-danger ml-2" style="line-height: 50px" v-if="songList.listDesc === ''">不能为空</span>
                </div>
                <div class="input-group mb-3" v-if="songList.id === ''">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button">上传封面</button>
                  </div>
                  <input @change="getFile()" class="btn btn-outline-secondary form-control" type="file"/>
                  <span class="badge badge-danger ml-2" style="line-height: 50px" v-if="songList.coverPic === ''">不能为空</span>
                </div>
                  <div>
                    <hr>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="submit" class="btn btn-primary">
                      <span v-if="songList.id === ''">添加</span>
                      <span v-else>修改</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!--modal 结束-->
      </div>
      <div class="row">
        <div class="card" style="width: 18rem;" :class="index === 0 ? '': 'ml-4'" v-for="(album, index) in albums" :key="index">
          <div class="card-header">
            {{album.name}}
          </div>
          <router-link to="/adminHeader" tag="img" class="card-img-top" :src="album.coverImgUrl" alt="Card image cap"></router-link>
          <div class="card-body">
            <span class="card-title font-weight-light">{{album.author}}</span>
            <p class="card-text font-italic">{{album.description}}</p>
            <!--<footer class="blockquote-footer">{{album.publishDate}}</footer>-->
          </div>
        </div>
      </div>
      <div class="mt-2" style="margin-left: -15px; width: 912px">
        <div class="card">
          <div class="card-header">
              <span class="float-left">
          每页显示：
          <select class="custom-select" style="width: 60px;" v-model="pageNumber">
          <option selected value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
            </span>
            <span class="font-weight-bold" style="font-size: 20px; ">全部歌单</span>
            <from class="float-right" action="/adminIndex" method="post">
              页数跳转：<input type="number" style="width: 40px"/>
              <input type="submit" class="btn btn-primary" value="跳转" />
            </from>
          </div>
          <div class="card-body">
            <table class="table table-hover">
              <thead>
              <tr>
                <th scope="col">歌单id</th>
                <th scope="col">作者id</th>
                <th scope="col">歌单名称</th>
                <th scope="col">歌单描述</th>
                <th scope="col"><button type="button" class="btn btn-primary">删除一页</button></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(single, index) in songSheet" :key="index">
                <th scope="row"> {{single.id}}</th>
                <td>{{single.creatorId}}</td>
                <td>{{single.name}}</td>
                <td>{{single.description}}</td>
                <td><button class="btn btn-link" @click="songList.id = single.id, deleteSongList()">删除</button>
                  <button data-toggle="modal" data-target="#exampleModal" class="btn btn-link"
                          @click="songList.id = single.id, songList.songListName = single.name, songList.listDesc = single.description">修改</button></td>
              </tr>
              </tbody>
            </table>
            <a href="#" class="card-link">上一页</a>
            <a href="#" class="card-link">下一页</a>
          </div>
        </div>
      </div>
      <div class="mt-2" style="margin-left: -15px; width: 912px">
        <div class="mt-5">
          <div class="alert alert-secondary" role="alert" style="width: 910px; text-align: right;">
            <!-- 激活 modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#songModal">
              上传歌曲
            </button>
            <!-- Modal -->
            <div class="modal fade" id="songModal" tabindex="-1" role="dialog" aria-labelledby="songModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="songModalLabel">上传歌曲</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="uploadSong()">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-secondary" type="button">上传歌曲</button>
                        </div>
                        <input @change="getSong()" class="btn btn-outline-secondary form-control" type="file"/>
                      </div>
                      <div>
                        <hr>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="submit" class="btn btn-primary">上传</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!--modal 结束-->
          </div>
          <div class="card">
            <div class="card-header">
              <span class="float-left">
          每页显示：
          <select class="custom-select" style="width: 60px;" v-model="songPageNumber">
          <option selected>5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
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
                  <th scope="col">歌曲类型</th>
                  <th scope="col"><button type="button" class="btn btn-primary">删除一页</button></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(song, index) in songs" :key="index">
                  <td>{{song.id}}</td>
                  <td>{{song.name}}</td>
                  <td>{{song.type}}</td>
                  <td>
                    <button class="btn btn-link" @click="songPlay.id = song.id, deleteSong()">删除</button>
                    <button class="btn btn-link" data-toggle="modal" data-target="#playerModal" @click="songPlay.name = song.name, musicPlayer(song.url)">播放</button>
                    <!-- Modal -->
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
      <div class="modal fade" id="playerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="palyModalLabel">{{songPlay.name}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <audio id="myAudio" controls="controls">
                <source :src="songPlay.url" type="audio/mpeg">
              </audio>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="musicPause()">关闭</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from '../../API/axios-auth'
export default {
  name: 'MusicManage',
  data () {
    return {
      counter: 0,
      songList: {
        id: '',
        songListName: '',
        listDesc: '',
        coverPic: ''
      }, // 接收表单数据，用于上传数据到后台
      pages: 0, // 当前页数
      songPages: 0, // 当前歌曲页数
      formCom: {
        formData: '',
        conf: ''
      },
      song: '',
      // 获取返回数据
      albums: [],
      allSongSheet: [], // 获取从后端传输过来的所有数据
      songSheet: [], // 获取一页数据
      pageNumber: '', // 一页数据显示多少条数据
      songPageNumber: '', // 一页显示多少条歌曲数据
      songs: [], // 获取一页歌曲数据
      songPlay: {
        name: '',
        id: ''
      },
      allSongs: []
    }
  },
  watch: {
    pageNumber: function (newPageNumber, oldPageNumber) {
      this.songSheet = this.allSongSheet.slice(0, newPageNumber)
    },
    songPageNumber: function (newSongPageNumber, oldSongPageNumber) {
      this.songs = this.allSongs.slice(0, newSongPageNumber)
    }
  },
  created () {
    // 获取歌单数据

    axios.get('/musicManage/getSongSheetsByPages?pages=' + this.pages).then((res) => {
      this.albums = res.data.detail.songLists.slice(0, 3)
      this.allSongSheet = res.data.detail.songLists
      this.songSheet = this.allSongSheet.slice(0, 5)
    })
    axios.get('/musicManage/getSongsByPages?pages=' + this.songPages).then((res) => {
      console.log(res)
      this.allSongs = res.data.detail.songs
      this.songs = this.allSongs.slice(0, 20)
    })
  },
  methods: {
    getFile: function () {
      // 把图片绑定到songLIst的coverPic
      this.songList.coverPic = event.target.files[0]
    },
    getSong: function () {
      this.song = event.target.files[0]
    },
    simulateForm: function () {
      // 模拟表单操作
      let formData = new FormData()
      formData.append('songListName', this.songList.songListName)
      formData.append('listDesc', this.songList.listDesc)
      if (this.songList.id === '') {
        formData.append('coverPic', this.songList.coverPic)
      } else {
        formData.append('id', this.songList.id)
      }
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.formCom.formData = formData
      this.formCom.conf = config
    },
    createOrUpdate: function () {
      console.log(this.songList.id)
      if (this.songList.id === '') {
        this.postSongList()
      } else {
        this.updateSongList()
      }
    },
    // 创建歌单
    postSongList: function () {
      this.simulateForm()
      axios.post('/musicManage/setSongSheet', this.formCom.formData, this.formCom.config).then((res) => {
        if (res.data.code === 200) {
          alert('创建成功')
        } else {
          alert(res.data.message)
        }
        // 刷新页面
        this.$router.go(0)
      })
    },
    // 修改歌单
    updateSongList: function () {
      this.simulateForm()
      console.log(123246)
      axios.post('/musicManage/putSongSheetbyId', this.formCom.formData).then((res) => {
        if (res.data.code === 200) {
          alert('修改成功')
        } else {
          alert('修改失败')
        }
        // 刷新页面
        this.$router.go(0)
      })
    },
    // 删除表单
    deleteSongList: function () {
      let form = new FormData()
      form.append('id', this.songList.id)
      axios.post('/musicManage/deleteSongSheetById', form).then((res) => {
        console.log(this.songList.id)
        if (res.data.code === 200) {
          alert('删除成功')
        } else {
          alert('删除失败')
        }
        // 刷新页面
        this.$router.go(0)
      })
    },
    // 上传歌曲
    uploadSong: function () {
      let formData = new FormData()
      formData.append('song', this.song)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios.post('/musicManage/uploadSong', formData, config).then((res) => {
        if (res.data.code === 200) {
          alert('上传成功')
        } else {
          alert('上传失败')
        }
        // 刷新页面
        this.$router.go(0)
      })
    },
    // 音乐播放
    musicPlayer: function (url) {
      let audio = document.getElementById('myAudio')
      audio.src = url
      audio.play()
    },
    musicPause: function () {
      let audio = document.getElementById('myAudio')
      audio.pause()
      audio.load()
    },
    deleteSong: function () {
      let form = new FormData()
      form.append('id', this.songPlay.id)
      axios.post('/musicManage/deleteSongById', form).then((res) => {
        if (res.data.code === 200) {
          alert('删除成功')
        } else {
          alert('删除失败')
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
