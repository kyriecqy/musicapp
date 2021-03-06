import { createStore } from 'vuex'
import {getLyric,phoneLogin,userDetail} from '../api/index'

export default createStore({
  state: {
    playlist: [{
      name: '浪漫主义',
      id: 1887917182,
      al: {
        id: 134922893,
        name: "浪漫主义",
        pic: 109951166531420480,
        picUrl: "http://p3.music.126.net/lFFiY-jvO1ENHtK2bZ6eUw==/109951166531420475.jpg",
        pic_str: "109951166531420475",
      },
    }],
    playCurrentIndex: 0,
    lyric: '',
    currentTime: 0,
    intervalId: 0,
    user: {
      isLogin: false,
      username: 'crf',
      account: {}
    }
  },
  getters: {
    LyricList(state) {
      let arr = state.lyric.split(/\n/igs).map((item, i, arr) => {
        let min = parseInt(item.slice(1,3))
        let sec = parseInt(item.slice(4,6))
        let mill = parseInt(item.slice(7,10))
        
        return{
          min,sec,mill,
          lyric:item.slice(12,item.length),
          item,
          time: mill+sec*1000+min*60*1000
        }
      })

      arr.forEach((item, i) => {
        if(i!=0&&arr[i].time){
          item.pre1 = arr[i].time
          item.pre2 = arr[i+1].time
        }
      })
      //console.log(arr);
      return arr
    }
  },
  mutations: {
    setPlaylist(state, value) {
      state.playlist = value
    },
    pushPlaylist(state, value) {
      state.playlist.push(value)
    },
    setPlayIndex(state, value) {
      state.playCurrentIndex = value
    },
    setLyric(state, value) {
      state.lyric = value
    },
    setCurrentTime(state, value) {
      state.currentTime =value
    },
    setUser_isLogin(state, value) {
      state.user.isLogin = value
    }
  },
  actions: {
    async reqLyric(content, payload) {
      console.log(payload);
      let res = await getLyric(payload.id)
      content.commit('setLyric', res.data.lrc.lyric)
      console.log(res);
      /*console.log(res.data.lrc.lyric);*/
    },
    async login(content, payload) {
      //console.log(payload);
      let res = await phoneLogin(payload.phone, payload.password)
      content.state.user.account = res.data.account
      let userdetail = await userDetail(res.data.account.id)
      console.log(userdetail);
      console.log(res);
      if(res.data.code == 200){
        let value = true
        content.commit('setUser_isLogin', value)
      }
      return res
    }
  },
  modules: {
  }
})
