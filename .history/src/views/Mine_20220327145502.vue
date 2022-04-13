<template>
  <mlist-top></mlist-top>
  <play-list></play-list>
</template>

<script>
import mlistTop from '../components/mlistTop.vue'
import playList from '../components/playList.vue' 
import store from '../store/index.js'
export default({
  name: 'Mine',
  components: {
    mlistTop,
    playList
  },
})
</script>

<style scoped>

</style>
