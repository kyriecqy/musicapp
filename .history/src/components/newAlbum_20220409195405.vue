<template>
  <div class="newAlbum">
    <div class="nav">
      最新专辑
    </div>
    <div class="body">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import {getNewAlbum} from '../api/index'
import axios from 'axios'
export default ({
  name: 'newAlbum',
  async mounted() {
    let res = await getNewAlbum()
    console.log(res);
  }
  
})
</script>

<style scoped>
.newAlbum {
  margin-top: 0.8rem;
  width: 7.5rem;
}
.nav {
  font-weight: 900;
  font-size: 0.4rem;
  margin-left: 0.4rem;
}
</style>