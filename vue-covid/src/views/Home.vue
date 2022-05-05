<template>
  <div class="home">
    <Header />
    <NcovInfo :ncovInfo='ncovInfo'/>
    <CaseNum :caseNum='caseNum'/>
    <Map />
    <Myswiper />
    <Trip />
    <News :NewsList='NewsList'/>
  </div>
</template>

<script>
import api from "../api/index";
import Header from "../components/Header.vue";
import NcovInfo from "../components/NcovInfo.vue";
import CaseNum from "../components/CaseNum.vue";
import Map from "../components/Map.vue";
import Myswiper from "../components/Myswiper.vue";
import Trip from "../components/Trip.vue";
import News from "../components/News.vue";

export default {
  name: "Home",
  components: {
    Header,
    NcovInfo,
    CaseNum,
    Map,
    Myswiper,
    Trip,
    News
  },
  data() {
    return {
      ncovInfo: [],
      caseNum:{},
      NewsList:[]
    };
  },
  mounted() {
    api
      .getNcov({
        key: "62e34ad34025d5d5127135efa58d4ca8",
      })
      .then((res) => {
        //这个是高风险地区需要的数据
        this.ncovInfo = res.data.newslist[0].riskarea.high;
        //这个是疫情数据需要的数据
        this.caseNum = res.data.newslist[0].desc;
        // console.log(res.data.newslist[0].desc);
        // console.log(res);
        //新闻的数据
        this.NewsList = res.data.newslist[0].news;

      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
