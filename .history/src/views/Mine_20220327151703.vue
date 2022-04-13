<template>
  <div class="playTop">
    <div class="back" @click="$router.push('/')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </div>
    <div class="center">
      <div class="title"></div>
    </div>
    <div class="share">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>

  <div class="content">
    <div class="content-left">
      <img src="../assets/img/swiper1.jpg">
    </div>
  </div>
</template>

<script>
export default({
  
})
</script>

<style scoped>
.playTop {
  display: flex;
  justify-content: space-between;
  width: 7.5rem;
  height: 1.2rem;
  position: absolute;
  left: 0;
  top: 0;
  color: #475669;
  padding: 0.4rem;
}

.content {
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
}
.content-left {
  position: relative;
  left: 0.4rem;
}
.content-left img {
  height: 2.8rem;
  width: 2.8rem;
}
</style>
