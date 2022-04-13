<template>
  <div class="search">
    <search-top></search-top>
    <hot-search></hot-search>
  </div>
</template>

<script>
import searchTop from '../components/searchTop.vue'
import hotSearch from '../components/hotSearch.vue'
export default({
  components: {
    searchTop,
    hotSearch
  }
})
</script>

<style scoped>

</style>