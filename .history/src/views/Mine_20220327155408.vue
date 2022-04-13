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
      <svg class="icon" aria-hidden="true" @click="logOut()">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>

  <div class="content">
    <div class="content-left">
      <img :src="$store.state.userdetail.data.profile.avatarUrl">
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
          + 收藏
        </div>
      </div>
    </div>
    <!--     musiclist     -->
    <div class="list">
      
    </div>
    
  </div>
</template>

<script>
import {logout} from '../api/index'
export default({
  name: 'Mine',
  methods: {
    logOut() {
      let res = logout();
      console.log(res);
    }
  }
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
</style>
