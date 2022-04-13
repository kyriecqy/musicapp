<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shoucangdaogedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-_rili"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liuhangpaihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default({
  name: 'iconList'
})
</script>
<style scoped>
.iconList {
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
}
.iconItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  width: 0.7rem;
  height: 0.7rem;
}
</style>
