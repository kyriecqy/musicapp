<template>
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
        <img >
      </div>
      <div class="content-right">
        <h3></h3>
        <div class="author">
          <img >
          <span></span>
        </div>
        <div class="description">
          
        </div>
      </div>
    </div>
    <!--  iconList  -->
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun1"></use>
        </svg>
        <span></span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span></span>
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
  <div class="playlist">
    <!--     top     -->
    <div class="top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tuya-"></use>
        </svg>
        <div class="title-num">
          <div class="title">播放全部</div>
          <div class="num"></div>
        </div>
      </div>
      <div class="right">
        <div class="shoucang">
          
        </div>
      </div>
    </div>
    <!--     musiclist     -->
    <div class="list">
      <div class="playItem">
        <div class="list-left">
          <div class="index"></div>
          <div class="content">
            <div class="list-title"></div>
            <div class="detail">
              <div class="author"></div>
              <div class="zhuanji"></div>
            </div>
          </div>
        </div>
        <div class="list-right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-shuxiang"></use>
          </svg>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default({
  name: 'Mine',
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
/*          top           */
.playlist {
  width: 7.5rem;
  margin-top: 0.3rem;
}
.title-num {
  display: flex;
  padding-left: 0.3rem;
  align-items: center;
}
.top {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  height: 0.8rem;
  /*border: 1px solid #ccc;*/
  align-items: center;
  background-color: #fff;
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
}
.left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
}
.title {
  font-size: 0.4rem;
  font-weight: 900;
}
.num {
  color: #666;
}
.icon {
  height: 0.5rem;
  width: 0.5rem;
}
.shoucang {
  background-color: rgb(221, 115, 16);
  height: 0.7rem;
  line-height: 0.7rem;
  width: 2rem;
  border-radius: calc(0.4rem);
  padding-left: 0.15rem;
}
/*         musiclist        */
.playItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  padding-top: 0.1rem;
}
.list-left {
  display: flex;
  justify-content: space-between;
}
.index {
  padding-left: 0.4rem;
  align-items: center;
  line-height: 0.8rem;
  width: 0.4rem;
}
.content {
  padding-left: 0.8rem;
  
}
.detail {
  font-size: 0.2rem;
  color: #666;
  display: flex;
  justify-content: center;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.zhuanji {
  padding-left: 0.2rem;
}
.list-title {
  font-size: 0.3rem;
  margin-bottom: 0.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.list-right {
  padding-right: 0.3rem;
}
.list-right .icon {
  margin-left: 0.4rem;
}
</style>
