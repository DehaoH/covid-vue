<template>
<!-- 高风险区展示模块 -->
  <div class="info">
    <p class="title">
      <i></i>
      高风险地区
    </p>
    <div class="content">
      <p v-for="(item,index) in ncovInfo" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    ncovInfo:{
      type:Array,
      default:()=>{
        return []
      }
    }
  }

  
};
</script>

<style scoped>
.info {
  padding: 1.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.title {
  font-size: 1.17rem;
}
.title i {
  display: inline-block;
  width: 0.34rem;
  height: 1.36rem;
  margin-right: 0.13rem;
  background: #4169e2;
  vertical-align: middle;
}
.content {
  padding: 1rem;
}
.content p {
  font-size: 1rem;
}
</style>