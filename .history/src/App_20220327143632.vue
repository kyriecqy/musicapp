

<template>
  <div>
    <router-view/>
    <play-controller></play-controller>
  </div>
</template>
<script>
import playController from '../src/components/playController.vue'

export default({
  components: {
    playController
  },
  mounted(){
    let userData = JSON.parse(localStorage.userData)
    this.$store.commit('setUser', userData)
    console.log(userData);
  }
})
</script>
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
