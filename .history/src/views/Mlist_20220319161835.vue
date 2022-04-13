<template>
<mlist-top :playlist="state.playlist"></mlist-top>
<play-list :playlist="state.playlist"></play-list>
</template>

<script>
import mlistTop from '../components/mlistTop'
import playList from '../components/playList' 
import {getPlaylistDetail} from '../api/index.js'
import {onMounted,reactive,rective} from 'vue'
import {useRoute} from 'vue-router'
import store from '../store/index.js'
export default({
  name: 'Mlist',
  components: {
    mlistTop,
    playList
  },
  setup() {
    let route = useRoute()
    let state = reactive({
      list:[],
      playlist:{
        creator: {},
        tracks: []
      }
    })
    onMounted(async () => {
      let id = route.query.id
      let res = await getPlaylistDetail(id);
      state.playlist = res.data.playlist
      store.commit('setPlaylist', state.playlist.tracks)
      console.log(state.playlist);
      console.log(res);
    })
    return {
      state
    }
  }
})
</script>
