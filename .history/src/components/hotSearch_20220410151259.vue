<template>
  <div class="hotSearch">
    <div class="title">热搜榜</div>
    <div class="body">
      <div class="left" v-for="(hot, i) in hots" :key="i">
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
  display: -webkit-box;/*将对象作为弹性伸缩盒子模型显示。*/
	-webkit-box-orient: vertical;/*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
	-webkit-line-clamp: 2;/*这个属性不是css的规范属性，需要组合上面两个属性，表示显示2行。	*/
}
.left {
  width: 100%;
  


}

</style>
