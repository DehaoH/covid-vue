<template>
<!-- 头部图片背景模块 -->
  <div class="header"></div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 0;
  /* 高度是0，所以padding-top：33.5就是图片的高 */
  padding-top: 33.5%;   
  background: url("../assets/1.jpg") no-repeat;
  background-size: cover;   
  color: #fff;
  font-size: 0.28rem;
  text-align: center;
  position: relative;
}
</style>