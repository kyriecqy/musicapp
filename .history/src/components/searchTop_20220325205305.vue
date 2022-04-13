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
        <div class="keywordItem"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default({
  name: 'searchTop',
  props: [
    'playlist',
  ],
  data() {
    return {
      placeholder: 'Kyrie Irving',
      keywordList: [],
      searchKeyword: ''
    }
  },
  beforeMounte() {
    this.keywordList = JSON.parse(localStorage.keywordList)
  },
  methods: {
    saveKeyword() {
      this.keywordList.push()
      localStorage.keywordList = JSON.stringify(this.keywordList)
    }
  }
})
</script>

<style scoped>
.searchTop {
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
