<template>
  <div class="mlistTop">
    <img :src="playlist.coverImgUrl" class="bg">
    <!--  topNav  -->
    <div class="topNav">
      <div class="top-left">
        <div class="back" @click="$router.go(-1)">
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-zuojiantou"></use>
         </svg>
        </div>
        <div class="title">
          歌单
        </div>
      </div>
      <div class="top-right">
        <div class="search">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
        <div class="more">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-shuxiang"></use>
          </svg>
        </div>
      </div>
    </div>
    <!--  content  -->
    <div class="content">
      <div class="content-left">
        <img :src="playlist.coverImgUrl">
      </div>
      <div class="content-right">
        <h3>{{ playlist.name }}</h3>
        <div class="author">
          <img :src="playlist.creator.avatarUrl">
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description">
          {{ playlist.description }}
        </div>
      </div>
    </div>
    <!--  iconList  -->
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun1"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default({
  name: 'mlistTop',
  props: [
    'playlist',
  ]
})
</script>

<style scoped>
.mlistTop {
  width: 7.5rem;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 7.5rem;
  height: auto;
  z-index: -1;
  filter: blur(40px);
}
.icon {
   width: 0.5rem; height: 0.5rem;
   vertical-align: -0.15em;
   fill: #fff;
   overflow: hidden;
}
/*    topNav    */
.topNav, .top-left, .top-right {
  display: flex;
  justify-content: space-between;
}
.top-left, .top-right{
  margin: 0.4rem 0.3rem;
}
.title {
  padding-left: 0.4rem;
  font-size: 0.35rem;
  color: #fff;
}
.search {
  padding-right: 0.4rem;
}

/*     content    */
.content {
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
}
.content-left {
  position: relative;
  left: 0.4rem;
}
.content-left img {
  height: 2.8rem;
  width: 2.8rem;
}
.content-right {
  position: relative;
  right: 0.4rem;
  width: 3.5rem;
  height: 2.8rem;
  /*border: 1px solid skyblue;*/
  color: #fff;
}
.content-right h3 {
  font-size: 0.34rem;
}
.author {
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  color: #ccc;
}
.author img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
}
.author span {
  padding-left: 0.2rem;
}
.description {
  font-size: 0.24rem;
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/*    iconList    */
.iconList {
  display: flex;
  justify-content: space-around;
  color: #fff;
  padding-top: 0.5rem;
}
.iconItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
