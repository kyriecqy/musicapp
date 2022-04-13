<script setup>
import playController from './components/playController'

export default({
  components: {
    playController
  }
})
</script>

<template>
  <div>
    <router-view/>
    <play-controller></play-controller>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
.icon {
  width: 0.3rem;
}
</style>
