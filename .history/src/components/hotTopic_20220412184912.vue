<template>
  <div class="hotTopic">
    <div class="title">热门话题</div>
    <div class="body">
      123
    </div>
  </div>
</template>

<script>
import {getHotTopic} from '../api/index'
export default ({
  name: 'hotTopic',
  data() {
    return {
      hots: [
        {actId: '', title: '', participateCount: ''}
      ]
    }
  },
  async mounted() {
    let res = await getHotTopic()

    console.log(res);
  }
})
</script>

<style scoped>
.hotTopic {
  margin-top: 0.4rem;
  height: 4rem;
}
.body {
  margin-left: 0.1rem;
  margin-top: 0.2rem;
}
.title {
  font-weight: 900;
  font-size: 0.4rem;
  margin-left: 0.1rem;
}
</style>
