<template>
  <div class="musicList">
    <div class="top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <el-carousel :interval="4000" type="card" height="150px" indicator-position="none" class="test">
      <el-carousel-item v-for="(m, i) in music" :key="i">
        <router-link :to="{path: '/mlist', query: {id: m.id}}">
          <h3><img :src="m.picUrl"></h3>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import axios from 'axios'
import {onMounted,reactive} from 'vue'
import {getMusiclist} from '../api/index.js'
export default({
  name: 'musicList',
  /*
  setup() {
    let music = reactive([])
    onMounted(async () => {
      let res = await getMusiclist(8)
      music = res.data.result
      console.log(music);
    })
    return {
      music
    }
  }
  */
  data() {
    return {
      music: []
    }
  },
  mounted() {
    let res = axios.get('http://music.cpengx.cn/personalized?limit=8').then(result => {
      //console.log(result);
      //console.log(this.music);
      this.music = result.data.result
    })
  }
})

</script>

<style scoped>
.test {
  border: 1px solid red;
}
.musicList {
  width: 7rem;
  margin-top: 0.4rem;
}
.top {
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 0.4rem;
  font-weight: 900;
}
.more {
  border: 1px solid #ccc;
  padding: 0.1rem;
  margin-right: 0.7rem;
  border-radius: 0.2rem;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
