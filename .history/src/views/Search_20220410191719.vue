<template>
  <div class="search">
    <search-top></search-top>
    <hot-search></hot-search>
    <hot-playlist></hot-playlist>
  </div>
</template>

<script>
import searchTop from '../components/searchTop.vue'
import hotSearch from '../components/hotSearch.vue'
import hotPlaylist from '../components/hotPlaylist.vue'
export default({
  components: {
    searchTop,
    hotSearch,
    hotPlaylist
  }
})
</script>

<style scoped>

</style>