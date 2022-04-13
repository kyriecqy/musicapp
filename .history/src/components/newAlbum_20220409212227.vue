<template>
  <div class="newAlbum">
    <div class="nav">
      最新专辑
    </div>
    <div class="body">
      <div class="album-item" v-for="(img, i) in imgs" :key="i">
        <div class="left">
          <img :src="img.picUrl" alt="">
        </div>
        <div class="right">
          <div class="title">{{img.name}}</div>
          <div class="author">{{img.artist.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getNewAlbum} from '../api/index'
import axios from 'axios'
export default ({
  name: 'newAlbum',
  data() {
    return {
      imgs: [
        {picUrl: '', name: '', artist: {name: ''}}
      ]
    }
  },
  async mounted() {
    let res = await getNewAlbum()
    console.log(res);
    this.imgs = res.data.albums
  }
  
})
</script>

<style scoped>
.newAlbum {
  margin-top: 0.8rem;
  width: 7rem;
}
.nav {
  font-weight: 900;
  font-size: 0.4rem;
  margin-left: 0.1rem;
}
.body {
  margin-left: 0.4rem;
  margin-top: 0.3rem;
  height: 3.1rem;
  overflow: hidden;
  overflow-y: scroll;
}
.body::-webkit-scrollbar {display:none}
.album-item {
  width: 100vw;
  display: flex;
}
.left img {
  width: 1rem;
  height: 1rem;
}
.right {
  flex: 1;
  padding-left: 0.2rem;
}
.title {
  font-weight: 900;
  width: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.author {
  font-size: 0.2rem;
}
</style>