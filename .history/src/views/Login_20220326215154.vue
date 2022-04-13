<template>
  <div class="login">
    <div class="top">
      网易云音乐
    </div>
    <div class="main">
      <div class="zhanghao">
        <p>账号</p>
        <input type="text">
      </div>
      <div class="mima">
        <p>密码</p>
       <input type="password">
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
export default({
  
})
</script>

<style scoped>
.login {
  width: 7.5rem;

}
.top {
  margin: 2rem 2.3rem;
  padding: 0 0.7rem;
  width: 3rem;
  height: 2rem;
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
  margin: 0.3rem 2rem;
  width: 3.5rem;
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
</style>
