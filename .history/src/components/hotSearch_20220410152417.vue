<template>
  <div class="hotSearch">
    <div class="title">热搜榜</div>
    <div class="body">
      
    </div>
  </div>
</template>

<script>
import {getHotSearch} from '../api/index'
export default ({
  name: 'hotSearch',
  data() {
    return {
      hots1: [
      ],
      hots2: [
      ]
    }
  },
  async mounted() {
    let res = await getHotSearch()
    console.log(res);
    for(let i=0;i<parseInt(res.data.result.hots.length/2);i++)
      this.hots1.push(res.data.result.hots[i])
    for(let i=parseInt(res.data.result.hots.length/2);i<res.data.result.hots.length-1 ;i++)
      this.hots2.push(res.data.result.hots[i])
    //console.log(this.hots1);
    //console.log(this.hots2);
    console.log(this.hots1[0].first);
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
}
.left {
  width: 100%;
  display: flex;


}

</style>
