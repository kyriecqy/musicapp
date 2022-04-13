<template>
  <div class="hotPlaylist">
    <div class="title">热门歌单分区</div>
    <div class="body">
      <div class="item" v-for="(tag, i) in tags" :key="i">
        <div class="name">{{tag.name}}</div>
        <div class="count">{{setCount(tag.usedCount)}}</div>
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
  methods: {
    setCount(count) {
      if(count > 10000) 
        return (count/10000).toFixed(1) + '万'
      else 
        return count
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
.body {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.4rem;
  margin-top: 0.2rem;
}
.item {
  width: 2.2rem;
  height: 1rem;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  margin-top: 0.1rem;
}
.count {
  font-size: 0.1rem;
  color: rgb(109, 106, 106);
}
</style>