<template>
  <div class="login">
    <img src="../assets/img/bg.jpg" alt="">
    <div class="playTop">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
    </div>
    <div class="top">
    </div>
    <div class="main">
      <div class="zhanghao">
        <p>账号</p>
        <input type="text" autocomplete="new-password">
      </div>
      <div class="mima">
        <p>密码</p>
       <input type="password" autocomplete="new-password">
      </div>
      <div class="denglu">
        <p>登录</p>
      </div>
    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
import {phoneLogin} from '../api/index'
export default({
  
})
</script>

<style scoped>
img {
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.login {
  width: 7.5rem;

}
.top {
  margin: 2rem 2.3rem 1rem;
  padding: 0 0.7rem;
  width: 3rem;
  /*border: 1px solid red;*/
  text-align: center;
}
.main {
  width: 7.5rem;
  height: 4rem;
  /*border: 1px solid yellow;*/
}
.main input {
  border: none;
  border-bottom: 1px solid #666;
  margin: 0.3rem 2.1rem;
  width: 3.5rem;
  height: 0.5rem;
  opacity: 0.5;
  background-color: rgb(176, 240, 245);
}
.main p {
  padding-top: 0.25rem;
  padding-left: 3.2rem;
  font-size: 20px;
  color: #666;
  font-weight: 900;
}
.denglu {
  width: 2.5rem;
  height: 1rem;
  align-items: center;
  border: 1px solid rgb(107, 5, 5);
  border-radius: 1rem;
  background-color: rgb(107, 5, 5);
  margin: 1rem 2.4rem;
}
.denglu p {
  padding: 0.2rem 0.8rem;
  color: #fff;
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
</style>
