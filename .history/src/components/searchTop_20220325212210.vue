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
  beforeMount() {
    this.keywordList = localStorage.keywordList? JSON.parse(localStorage.keywordList) : []
  },
  methods: {
    saveKeyword() {
      this.keywordList.push(this.searchKeyword)
      localStorage.keywordList = JSON.stringify(this.keywordList)
    }
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
  width: 2rem;
  height: 0.8rem;
  font-size: 900;
}
.historyRight {
  color: #666;
  display: flex;
}
.keywordItem {
  background-color: #eee;
  height: 0.6rem;
  padding: 0 0.2rem;
  border-radius: 0.4rem;
}
</style>
