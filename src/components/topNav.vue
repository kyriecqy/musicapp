<template>
  <div class="top">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-danlieliebiao"></use>
        </svg>
      </div>
      <div class="topCenter">
        <div class="cbtn" @click="$router.push('/mine')">我的</div>
        <div class="cbtn active">发现</div>
        <div class="cbtn">云村</div>
        <div class="cbtn">视频</div>
      </div>
      <div class="topRight" @click="$router.push('/search')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
</template>

<script>
export default ({
  name: 'topNav',
})
</script>
<style>
.icon {
   width: 0.45rem; height: 0.45rem;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.top {
  width: 7rem;
  height: 1rem;
  justify-content: space-between;
  align-items: center;
  /*padding: 0 0.3rem;*/
  /*border: 1px solid red;*/
  display: flex;
}
.topCenter {
  display: flex;
  justify-content: space-around;
  /*background-color: skyblue;*/
  width: 5rem;
  font-size: 0.35rem;
}
.active {
  font-weight: 900;
}
.topLeft {
  margin-left: 0.2rem;
}
</style>