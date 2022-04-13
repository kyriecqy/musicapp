<template>
  <div class="hotPlaylist">
    <div class="title">热门歌单分区</div>
    <div class="body"></div>
  </div>
</template>

<script>
import {getHotPlaylist} from '../api/index'
export default ({
  name: 'hotPlaylist',
  data() {
    return {
      tags: [
        {name: '', id: ''}
      ]
    }
  },
  async mounted() {
    let res = getHotPlaylist()
    //console.log(res);
    this.tags = res.data.tags
    console.log(this.tags);
  }
})
</script>

<style scoped>
.hotPlaylist {
  width: 100%;
  border: 1px solid blue;
  margin-top: 0.3rem;
}
.title {
  font-weight: 900;
  margin-left: 0.4rem;
}

</style>