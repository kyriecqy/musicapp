<template>
  <mlist-top :playlist="state.playlist"></mlist-top>
  <play-list :playlist="state.playlist"></play-list>
</template>

<script>
import mlistTop from '../components/mlistTop.vue'
import playList from '../components/playList.vue' 
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
