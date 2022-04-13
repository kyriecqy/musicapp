<template>
  <img :src="$store.state.user.userdetail.data.profile.avatarUrl" class="bg">
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
      <svg class="icon" aria-hidden="true" @click="myLogout()">
        <use xlink:href="#icon-tuichudenglu"></use>
      </svg>
    </div>
  </div>

  <div class="content">
    <div class="content-left">
      <img :src="$store.state.user.userdetail.data.profile.avatarUrl">
    </div>
    <div class="content-right">
      <h3>{{$store.state.user.userdetail.data.profile.nickname}}</h3>
      <h4>Lv. {{$store.state.user.userdetail.data.level}}</h4>
      <h4>{{$store.state.user.userdetail.data.profile.follows}} 关注</h4>
      <h4>{{$store.state.user.userdetail.data.profile.followeds}} 粉丝</h4>
    </div>
  </div>

  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zanting2"></use>
      </svg>
      <span>最近播放</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yigoushuliang"></use>
      </svg>
      <span>已购</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yunpan"></use>
      </svg>
      <span>云盘</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bendicang"></use>
      </svg>
      <span>本地下载</span>
      
    </div>
  </div>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31haoyou"></use>
      </svg>
      <span>我的好友</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shoucang"></use>
      </svg>
      <span>收藏</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xinhao"></use>
      </svg>
      <span>播客</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hezi"></use>
      </svg>
      <span>音乐盒子</span>
    </div>
  </div>
  
</template>

<script>
import {logout} from '../api/index'
import store from '../store/index'
export default({
  name: 'Mine',
  methods: {
    async myLogout() {

      await logout()
      store.commit('setLogout')
      this.$router.push('/login')
      
    }
  }
})
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 7.5rem;
  height: auto;
  z-index: -1;
  filter: blur(40px);
}
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
  padding-top: 1.8rem;
}
.content-left {
  position: relative;
  left: 0.4rem;
}
.content-left img {
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 0.4rem;
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
  padding: 0.2rem 0.5rem;
}
.content-right h4 {
  padding: 0 0.5rem;
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
  margin-top: 0.6rem;
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
