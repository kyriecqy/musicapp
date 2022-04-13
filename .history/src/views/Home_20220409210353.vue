<template>
  <topNav></topNav>
  <div class="block">
    <el-carousel height="175px" indicator-position="none" interval="2000">
      <el-carousel-item v-for="(img, i) in imgs" :key="i">
        <h3 class="small"><img :src="img.pic"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <iconList></iconList>
  <music-list></music-list>
  <new-album></new-album>
</template>

<script>
// @ is an alias to /src
import topNav from '../components/topNav.vue'
import iconList from '../components/iconList.vue'
import musicList from '../components/musicList.vue'
import newAlbum from '../components/newAlbum.vue'
import {ref, reactive} from 'vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    topNav,
    iconList,
    musicList,
    newAlbum
  },
  data() {
    return {
      imgs: [
        {pic:''},
        {pic:''}
      ]
    }
  },
  async mounted() {
    let result = await axios.get('http://music.cpengx.cn/banner?type=2').then(res => {
      //console.log(res);
      return res
    })
    //console.log(result);
    this.imgs = result.data.banners
  }
  

}

</script>
<style scoped>
body {
  width: 6rem;
  height: 100vh;
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
