<template>
<!-- 路由跳转的出行政策页面 -->
  <div class="Cityfto">
    <Header />
    <div class="title"><i></i> 疫情期间出行防疫政策
        <div class="linkdiv">
            <router-link class="gohome" to="/"> 返回首页 </router-link>
        </div>
    </div>
    <div class="info">
        <h3>出发城市：{{from_info.city_name}} 的最新防疫政策</h3>
      <div class="fromInfo">
        <div class="inCity">进{{from_info.city_name}}</div>
        <div class="inCityInfo">{{from_info.low_in_desc}}</div>
        <div class="outCity">出{{from_info.city_name}}</div>
        <div class="outCityInfo">{{from_info.out_desc}}</div>
      </div>
    </div>

    <div class="info">
        <h3>到达城市：{{to_info.city_name}} 的最新防疫政策</h3>
      <div class="toInfo">
        <div class="inCity">进{{to_info.city_name}}</div>
        <div class="inCityInfo">{{to_info.low_in_desc}}</div>
        <div class="outCity">出{{to_info.city_name}}</div>
        <div class="outCityInfo">{{to_info.out_desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
import Header from "../components/Header.vue";
export default {
    data () {
        return {
            from_info:{},
            to_info:{}      
        }
    },
  components: {
    Header,
  },
  props: {  //路由跳转过来的2个参数
    FromId: {
      type: String,
      default: "",
    },
    toId: {
      type: String,
      default: "",
    },
  },
  mounted() {
    //将2个参数转为数字格式进行网络请求，拿到对应的防疫政策
    let fromId = parseInt(this.FromId);
    let toId = parseInt(this.toId);
    console.log(fromId, toId);

    api
      .getCitysPolicy({
        key: "2817c9b91b6b863b9ca3294b74001f3a",
        from: fromId,
        to: toId,
      })
      .then((res) => {
        console.log(res);
        if(res.data.result){
            this.from_info = res.data.result.from_info;
            this.to_info = res.data.result.to_info;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.Cityfto {
  background: #fff;
  padding-bottom: 10px;
}
.title {
  /* width: 100%; */
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 1.16rem;
  font-size: 1.17rem;
   display: flex;
}
.title i {
  display: inline-block;
  width: 0.34rem;
  height: 1.5rem;
  margin-right: 0.4rem;
  background: #4169e2;
  vertical-align: middle;
}
.info {
  /* width: 100%; */
  padding: 10px;
  margin: 10px;
  background: #fff;
  border: 1px solid #f1f1f1;
}
.fromInfo , .toInfo{
  padding-bottom: 20px;
  border-bottom: 1px solid #f1f1f1;
}
.fromInfo .inCity,.toInfo .inCity{
  font-weight: bold;
  color: #4169e2;
  margin-bottom: 5px;
      padding-top: 5px;
}
.fromInfo .inCityInfo,
.fromInfo .outCityInfo,.toInfo .inCityInfo, .toInfo .outCityInfo {
  font-size: 13px;
  text-indent: 2em;
  margin-bottom: 5px;
}
.fromInfo .outCity,.toInfo .outCity{
  font-weight: bold;
  color: #FF0000 ;
  margin-bottom: 5px;
  padding-top: 5px;
}
.info h3{
    margin-bottom: 10px;
}
.gohome {
  color: #666;
  text-align: right;
  font-size: 0.8rem;

}
.linkdiv{
    flex: 1;
    text-align: right;
}
</style>