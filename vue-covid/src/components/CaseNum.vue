<template>
<!-- 累计确诊模块 -->
  <div class="CaseNum">
    <div class="CaseNumDate">截止 {{getDate(caseNum.modifyTime)}} 全国数据统计</div>
    <div class="num">
      <ul>
          
        <li class="CaseNumInfo">
          <div>
            <b>较昨日<em style="color: rgb(247, 76, 49)">{{numJudge(caseNum.currentConfirmedIncr)}}</em></b>
          </div>
          <strong style="color: rgb(247, 76, 49)">{{
            caseNum.currentConfirmedCount
          }}</strong>
          <span>现存确诊</span>
        </li>

        <li class="CaseNumInfo">
          <div>
            <b>较昨日<em style="color: rgb(247, 130, 7)">+{{ caseNum.confirmedIncr }}</em></b>
          </div>
          <strong style="color: rgb(247, 130, 7)">{{caseNum.confirmedCount}}</strong>
          <span>累计确诊</span>
        </li>

        <li class="CaseNumInfo">
          <div>
            <b>较昨日<em style="color: rgb(162, 90, 78)">+{{ caseNum.suspectedIncr }}</em></b>
          </div>
          <strong style="color: rgb(162, 90, 78)">{{caseNum.suspectedCount}}</strong>
          <span>累计境外输入</span>
        </li>

        <li class="CaseNumInfo">
          <div>
            <b>较昨日<em style="color: rgb(174, 33, 44)">+{{ caseNum.curedIncr }}</em></b>
          </div>
          <strong style="color: rgb(174, 33, 44)">{{caseNum.curedCount}}</strong>
          <span>累计治愈</span>
        </li>

        <li class="CaseNumInfo">
          <div>
            <b>较昨日<em style="color: rgb(93, 112, 146)">+{{ caseNum.deadIncr }}</em></b>
          </div>
          <strong style="color: rgb(93, 112, 146)">{{ caseNum.deadCount }}</strong>
          <span>累计死亡</span>
        </li>

        <li class="CaseNumInfo">
          <div>
            <b>较昨日<em style="color: rgb(40, 183, 163)">{{ numJudge(caseNum.seriousIncr) }}</em></b>
          </div>
          <strong style="color: rgb(40, 183, 163)">{{ caseNum.seriousCount }}</strong>
          <span>现存无症状</span>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
    //1. 获取props数据
  props: {
    caseNum: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
      //2. 判断新增数据的正负
    numJudge(num) {
      return num > 0 ? "+" + num : num;
    },
    //3. 处理时间戳
    getDate(date){
        var date = new Date(date);
        var Y = date.getFullYear() + '-';
        var M = date.getMonth() > 10 ? (date.getMonth() + 1)+ '-' : '0' + (date.getMonth() + 1) + '-' ;
        var D = date.getDate() > 10 ? date.getDate() + '  ' : '0' + date.getDate() + '  ';
        var h = date.getHours() > 10 ? date.getHours() + ':' : '0' + date.getHours() + ':';
        var m = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
        return Y + M + D + h + m

    }
  },
};
</script>

<style scoped>
.CaseNum {
  background: #fff;
  padding: 1.16rem;
  /* width: 100%; */
}
.CaseNumDate {
  font-size: 0.9rem;
}
.num{
    border: 1px solid #f1f1f1;
    margin: 0.5rem 0;
    padding: 0.5rem 0;
      box-shadow:0px 0px 5px rgb(0, 0,0,0.2);
}
/* 5.弹性盒模型的处理 */
.num ul{
    /* 弹性盒模型 */
    display: flex;
    /* 不够位置换行 */
    flex-wrap: wrap;
    /* 全部元素对齐 */
    align-items: center;
    /* 四周留白 */
    justify-content: center;
    /* 元素内容居中对齐 */
    text-align: center;
}
.CaseNumInfo {
  width: 29%;
  padding: 0.5rem 0.4rem;

}
.CaseNumInfo strong{
  display: block;
  margin: 0.3rem 0;
  font-size: 1.5rem;
}
.CaseNumInfo em,b {
  padding: 0 0 0 0.2rem;
  font-size: 0.6rem;
}
.CaseNumInfo em{
    font-size: 0.8rem;
}
.CaseNumInfo span{
  font-size: 0.9rem;
  font-weight: bolder;
}
</style>