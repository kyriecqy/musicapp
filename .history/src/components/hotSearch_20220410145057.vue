<template>
  <div class="hotSearch">
    <div class="title">热搜榜</div>
    <div class="body">
      <div class="left">左边</div>
      <div class="right">右边</div>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'hotSearch'
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
  display: flex;
}
.left {
  width: 50%;
}
</style>
