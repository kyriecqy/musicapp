<template>
  <div class="playlist">
    <!--     top     -->
    <div class="top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tuya-"></use>
        </svg>
        <div class="title-num">
          <div class="title">播放全部</div>
          <div class="num">(共{{ playlist.tracks.length }}首)</div>
        </div>
      </div>
      <div class="right">
        <div class="shoucang" @click="setCount">
          收藏({{setCount}})
        </div>
      </div>
    </div>
    <!--     musiclist     -->
    <div class="list">
      <div class="playItem" v-for="(item, i) in playlist.tracks" :key="i">
        <div class="list-left" @click="setPlayIndex(i)">
          <div class="index">{{ i+1 }}</div>
          <div class="content">
            <div class="list-title">{{ item.name }}</div>
            <div class="detail">
              <div class="author">{{ item.ar[0].name }}</div>
              <div class="zhuanji">{{ item.al.name }}</div>
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
import {mapMutations} from 'vuex'
export default ({
  name: 'playList',
  props: [
    'playlist'
  ],
  methods: {
    ...mapMutations(['setPlayIndex']),
    
  },
  computed: {
    setCount() {
      //console.log(this.playlist.subscribedCount);
      if(this.playlist.subscribedCount >= 10000){
        return (this.playlist.subscribedCount/10000).toFixed(1) + '万'
      }else {
        return this.playlist.subscribedCount
      }
    }
  }
})
</script>

<style scoped>
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
