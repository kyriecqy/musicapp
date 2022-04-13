<template>
  <div class="hotPlaylist">
    <div class="title">热门歌单分区</div>
    <div class="body">
      <div class="item" v-for="(tag, i) in tags" :key="i">
        <div class="name">{{tag.name}}</div>
        <div class="count">{{tag.usedCount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {getHotPlaylist} from '../api/index'
export default ({
  name: 'hotPlaylist',
  data() {
    return {
      tags: [
        {name: '', id: '', usedCount: ''}
      ]
    }
  },
  async mounted() {
    let res = await getHotPlaylist()
    //console.log(res.data.tags);
    this.tags = res.data.tags
    //console.log(this.tags);
  },
  computed: {
    setCount() {
      for(let i=0;i<this.tags.length;i++){
        if(this.tags[i].usedCount > 10000) 
          return (this.tags[i].usedCount/10000).toFixed(1) + '万'
        else 
          return this.tags[i].usedCount
      }
    }
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