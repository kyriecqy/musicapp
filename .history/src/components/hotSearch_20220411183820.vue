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
      hots: [
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
  position: absolute;
  top: 3rem;
}
.title {
  margin-left: 0.4rem;
  font-weight: 900;
}
.body {
  margin: 0.2rem 0.4rem;
  border: 1px solid rgb(229, 208, 208);
  background-color: rgb(229, 208, 208);
  border-radius: 0.2rem;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.item {
  width: 50%;
  display: flex;
  margin-top: 0.1rem;
}
.num {
  margin-left: 0.1rem;
}
.hotItem {
  margin-left: 0.1rem;
}
</style>
