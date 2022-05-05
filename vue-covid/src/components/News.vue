<template>
<!-- 新闻模块 -->
  <div class="newsbg">
    <div class="news">
      <ul>
        <li class="item" v-for="(item, index) in NewsList" :key="index">
          <a :href="item.sourceUrl">
            <div class="newDate">{{ item.pubDateStr }}</div>
            <div class="newInfo">
              <b>{{ item.title }}</b>
              <p>{{ item.summary }}</p>
            </div>
            <span>&gt;</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  //         id: 191429
  // infoSource: "央视新闻"
  // pubDate: 1651023865000
  // pubDateStr: "14小时前"
  // sourceUrl: "https://mp.weixin.qq.com/s/R8hd8fSOwGCIOGQP6iJHUA"
  // summary: "26日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增新冠肺炎本土确诊病例1818例，新增本土无症状感染者12404例"
  // title: "国家卫健委|昨日本土新增1818+12404"
  props: {  //拿到在home中请求的数据
    NewsList: Array,
    default: () => {
      return [];
    },
  },
};
</script>

<style scoped>
.newsbg {
  background: #fff;
  padding: 15px 0;
}
.news {
  background: #fff;
  margin: 0 10px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
}
.item a {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #f1f1f1;
  align-items: center;
}
.newDate {
  width: 70px;
  font-size: 13px;
  background: red;
  color: #fff;
  align-items: center;
  text-align: center;
  justify-items: center;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  font-weight: bolder;
}
.newInfo {
  flex: 1;
  padding-right: 10px;
    width: 240px;
}
.newInfo b {
    display: inline-block;
   width: 240px;
  font-weight: bolder;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

}
.newInfo p {
  color: #888;
  padding-top: 5px;
  height: 34px;
  font-size: 12px;
  overflow: hidden; /*超出隐藏*/
  text-overflow: ellipsis; /*文本溢出时显示省略标记*/
  display: -webkit-box; /*设置弹性盒模型*/
  -webkit-line-clamp: 2; /*文本占的行数,如果要设置2行加...则设置为2*/
  -webkit-box-orient: vertical; /*子代元素垂直显示*/
}
.item span {
  padding-right: 5px;
  font-size: 20px;
}
</style>