<template>
<!-- 路由跳转的城市疫情地图 -->
  <div>
    <Header />
    <div class="title">
      <i></i>  {{ cityName }} 疫情情况
      <div class="linkdiv">
        <router-link class="gohome" to="/"> 返回首页 </router-link>
      </div>
    </div>
    <div class="city" id="city"></div>
  </div>
</template>

<script>
import api from "../api/index";
import Header from "../components/Header.vue";
export default {
  props: {
    cityName: {
      type: String,
      default: "",
    },
  },
  components: {
    Header,
  },
  mounted() {
    api
      .getCity({
        city: this.cityName,
      })
      .then((res) => {
        let citys = [];
        // console.log(res);
        if (res.data.retdata) {
          for (let i = 0; i < res.data.retdata.subList.length; i++) {
            let temp = {
              name: res.data.retdata.subList[i].city + "市",
              value: res.data.retdata.subList[i].curConfirm,
            };
            citys.push(temp);
          }
        }
        this.$charts.cityMap("city", citys, this.cityName);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.city {
  width: 375px;
  height: 400px;
}
.title {
  /* width: 100%; */
  background: #fff;
  border-top: 1px solid #f1f1f1;
  padding: 1.16rem;
  font-size: 1.17rem;
  display: flex;
}
.title i {
  display: inline-block;
  width: 0.34rem;
  height: 1.36rem;
  margin-right: 0.13rem;
  background: #4169e2;
  vertical-align: middle;
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