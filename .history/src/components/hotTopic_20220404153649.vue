<template>
  <div class="hotTopic">
    <div class="nav">
      热门话题
    </div>
    <div class="body">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import {gethotTopic} from '../api/index'
import axios from 'axios'
export default ({
  name: 'hotTopic',
  async mounted() {
    let result = axios.get(`http://music.cpengx.cn/hot/topic?limit=10&offset=10`).then(res => {
      console.log(res);
    })
  }
})
</script>

<style scoped>
.hotTopic {
  margin-top: 0.8rem;
  width: 7.5rem;
}
.nav {
  font-weight: 900;
  font-size: 0.4rem;
  margin-left: 0.4rem;
}
</style>