<template>
  <div class="playController">
    <div class="left" @click="isShow = !isShow">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
      <div class="content">
        <div class="title">{{ playlist[playCurrentIndex].name}}</div>
        <div class="tips">横划可以切换上下首</div>
      </div>
    </div>
    <div class="right">
      <svg v-if="pause" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofangqi-bofang"></use>
      </svg>
      <svg v-else class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting1"></use>
      </svg>
      <svg class="icon second" aria-hidden="true">
        <use xlink:href="#icon-gedan1"></use>
      </svg>
    </div>
    <play-music :play="play" :pause="pause" @back="isShow = !isShow" v-show="isShow" :playDetail="playlist[playCurrentIndex]"></play-music>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import playMusic from '../components/playMusic.vue'
export default({
  name: 'playController',
  components: {
    playMusic
  },
  data() {
    return {
      pause: true,
      isShow: false
    }
  },
  computed: {
    ...mapState(['playlist', 'playCurrentIndex','currentTime'])
  },
  updated(){
    console.log(this.playlist[this.playCurrentIndex]);
    this.$store.dispatch('reqLyric',this.playlist[this.playCurrentIndex])
  },
  mounted(){
    console.log(this.$refs);
    
  },
  methods: {
    play() {
      //console.log(this.$refs.audio.currentTime);
      if(this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.pause = false
        this.UpdateTime()
      }else {
        this.$refs.audio.pause()
        this.pause = true
        clearInterval(this.$store.state.id)
      }
      console.log([this.$refs.audio]);
      
    },
    UpdateTime(){
      this.$store.state.id = setInterval(() => {
        this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
      },1000)
    }
  }
})
</script>


<style scoped>
.playController {
  background-color: #fff;
  width: 7.5rem;
  height: 1.2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
}
.left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left img {
  width: 0.8rem;
  height: 0.8rem;
  display: flex;
  margin: 0 0.2rem;
  border-radius: 0.4rem;
}
.tips {
  font-size: 0.2rem;
  padding-top: 0.1rem;
  color: #999;
}
.icon {
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 0.2rem;
}

</style>