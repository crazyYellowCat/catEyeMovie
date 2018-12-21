<template>

<div>
  <ul id="tabBar">
    <router-link to="/home">首页 </router-link>
    <router-link to="/category">分类 </router-link>
    <router-link to="/cart">购物车 </router-link>
    <router-link to="/my">我的 </router-link>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'TabBar',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../style/main.less";

  #tabBar{
    position: fixed;
    z-index:999;
    bottom: 0;
    left:0;
    right:0;
    display: flex;
    justify-content: space-around;
    .h(100);
    .fs(20);
    .lh(100);
    background:@tabBg;
    li{
      width: 25%;
      text-align:center;
      .lh(60);
      color:@tabColor;

    }
  }
</style>
