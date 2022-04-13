<template>
  <div class="hotSearch">
    <div class="title">热搜榜</div>
    <div class="body">
      <div class="item" v-for="(hot, i) in hots" :key="i">
        <div class="num">{{ i+1 }}</div>
        <div class="hotItem">{{ hot.first }}</div>
      </div>
      
    </div>
  </div>
</template>

<script>
import {getHotSearch} from '../api/index'
export default ({
  name: 'hotSearch',
  data() {
    return {
      hosts: [
        {first: ''}
      ]
    }
  },
  async mounted() {
    let res = await getHotSearch()
    console.log(res);
    this.hots = res.data.result.hots
  }
})
</script>

<style scoped>
.hotSearch {
  width: 7.5rem;
  margin-top: 0.3rem
}
.title {
  margin-left: 0.4rem;
  font-weight: 900;
}
.body {
  margin: 0 0.4rem;
  border: 1px solid blue;
  height: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.item {
  width: 50%;
  display: flex;
}
.num {
  margin-left: 0.2rem;
}
.hotItem {
  margin-left: 0.1rem;
}
</style>
