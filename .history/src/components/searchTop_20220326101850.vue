<template>
  <div class="searchTop">
    <!--  topNav  -->
    <div class="topNav">
      <div class="top-left">
        <div class="back" @click="$router.go(-1)">
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-zuojiantou"></use>
         </svg>
        </div>
      </div>
      <div class="top-right">
        <input type="text" v-model="searchKeyword" :placeholder="placeholder" @keydown.enter="saveKeyword">
      </div>
    </div>
    <!--   history  -->
    <div class="history">
      <div class="historyLeft">
        历史
      </div>
      <div class="historyRight">
        <div class="keywordItem" v-for="(item, i) in keywordList" :key="i">
          {{item}}
        </div>
      </div>
    </div>
    <!--  musicList  -->
    <div class="list">
      <div class="playItem" v-for="(item, i) in searchSongs" :key="i">
        <div class="list-left" @click="setPlayIndex(i)">
          <div class="index">{{ i+1 }}</div>
          <div class="content">
            <div class="list-title">{{ item.name }}</div>
            <div class="detail">
              <div class="author" v-for="(author, j) in item.ar" :key="j">{{ author.name }}</div>
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
import {searchMusic} from '../api/index'
import {mapMutations} from 'vuex'
export default({
  name: 'searchTop',
  props: [
    'playlist',
  ],
  data() {
    return {
      placeholder: 'Kyrie Irving',
      keywordList: [],
      searchKeyword: '',
      searchSongs: []
    }
  },
  beforeMount() {
    this.keywordList = localStorage.keywordList? JSON.parse(localStorage.keywordList) : []
  },
  methods: {
    async saveKeyword() {
      if(this.keywordList.length>10){
        this.keywordList.pop()
      }
      this.keywordList.unshift(this.searchKeyword)
      this.keywordList = Array.from(new Set(this.keywordList))
      
      localStorage.keywordList = JSON.stringify(this.keywordList)
      let res = await searchMusic(this.searchKeyword)
      this.searchSongs = res.data.result.songs
      console.log(res);
    },
    ...mapMutations(['setPlayIndex'])
  }
})
</script>

<style scoped>
.searchTop {
  width: 7.5rem;
  padding: 0 0.4rem;
  

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
   width: 0.4rem; height: 0.4rem;
   vertical-align: -0.15em;
   fill: rgb(19, 18, 18);
   overflow: hidden;
}
/*    topNav    */
.topNav{
  display: flex;
  width: 100%;
  height: 1.2rem;
  align-items: center;
}
.top-right {
  padding: 0 0.4rem;
  flex: 1;
}
input {
  border: none;
  outline: none;
  border-bottom: 1px solid #666;
  width: 100%;
  height: 0.5rem;
}
.history {
  display: flex;
}
.historyLeft {
  width: 1rem;
  height: 0.8rem;
  font-weight: 900;
  line-height: 0.6rem;
}
.historyRight {
  color: #666;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.keywordItem {
  background-color: #eee;
  height: 0.6rem;
  padding: 0 0.2rem;
  border-radius: 0.4rem;
  line-height: 0.6rem;
  margin: 0.1rem 0.2rem;
}

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
  padding-left: 0.2rem;
  align-items: center;
  line-height: 0.8rem;
  width: 0.4rem;
}
.content {
  padding-left: 0.4rem;
  
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
