<template>
  <div class="playMusic">
    <div class="bg" :style="{backgroundImage: `url(${playDetail.al.picUrl})`}"></div>
    <div class="playTop">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">{{ playDetail.name }}</div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="playContent" v-if="!isLyric">
      <img class="bft" :class="{active:!pause}" src="../assets/img/bft.png" alt="">
      <img class="cp" src="../assets/img/cp.png" alt="">
      <img class="playImg" :src="playDetail.al.picUrl" alt="">
    </div>
    <div class="playLyric" v-else refs="playLyric">
      <p :class="{active:(currentTime*1000>=item.pre1&&currentTime*1000<=item.pre2)}" v-for="(item, i) in $store.getters.LyricList" :key="i">
        {{item.lyric}}
      </p>
    </div>
    <div class="progress"></div>
    <div class="playFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yuanxunhuanbofang"></use>
      </svg>
      <svg class="icon fo-icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-shangyishou"></use>
      </svg>
      <svg v-if="pause" class="icon play-icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting2"></use>
      </svg>
      <svg v-else class="icon play-icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting3"></use>
      </svg>
      <svg class="icon fo-icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-xiayishou"></use>
      </svg>
      <svg class="icon fo-icon" aria-hidden="true">
        <use xlink:href="#icon-24gf-playlistHeart"></use>
      </svg>
      
    </div>
  </div>
</template>

<script> 
import {mapState} from 'vuex'
export default({
  name: 'playMusic',
  props: ['playDetail','pause','play',],
  data() {
    return {
      isLyric: true
    }
  },
  computed: {
    ...mapState(['playlist', 'playCurrentIndex','lyric','currentTime'])
  },
  watch: {
    /*currentTime:function(newValue) {
      console.log(newValue);
      console.log([this.$refs.playLyric]);
      let p = document.querySelector('p.active')
      let offsetTop = p.offsetTop;

      this.$refs.playLyric.scrollTop = offsetTop;

    }*/
  },
  methods: {
    goPlay(num) {
      console.log(num);
      console.log(this.playlist);
      console.log(this.playCurrentIndex);
      let index = this.playCurrentIndex + num;
      if(index < 0){
        index = 0;
      }
      else if(index == this.playCurrentIndex.length)
      {
        index = this.playCurrentIndex-1;
      }
      this.$store.commit('setPlayIndex', index)
    }
  }
  
})
</script>

<style scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-size: auto 100%;
  filter: blur(60px);
  background-position: center;
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
.playContent {
  position: absolute;
  left: 0;
  top: 1.5rem;
  width: 7.5rem;
  height: 7.5rem;
}
.bft {
  position: absolute;
  left: 45%;
  width: 2.3rem;
  height: auto;
  z-index: 10;
  transition: all 1s;
  transform-origin: 0.36em 0;
  transform: rotate(324deg);
}
.bft.active {
  position: absolute;
  left: 45%;
  width: 2.3rem;
  height: auto;
  z-index: 10;
  transition: all 1s;
  transform-origin: 0.36em 0;
  transform: rotate(358deg);
}
.cp {
  width: 5rem;
  height: auto;
  position: absolute;
  top: 30%;
  left: 18%;
}
.playImg {
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  top: 42%;
  left: 30%;
  border-radius: 1.5rem;
}
.playFooter {
  width: 7.5rem;
  height: 1.2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  /*border: 1px solid red;*/
  margin-bottom: 0.5rem;
}
.fo-icon {
  width: 0.5rem;
  height: 0.5rem;
}
.play-icon {
  width: 0.8rem;
  height: 0.8rem;
}
.playLyric {
  position: absolute;
  left: 0;
  top: calc(50% - 6rem);
  width: 7.5rem;
  height: 10rem;
  /*border: 1px solid red;*/
  overflow: scroll;
  text-align: center;
  padding: 0.2rem 0;
}
.active {
  color: red;
}
</style>
