<template>
<!-- 疫情地图模块 -->
<!-- 使用的是自己封装的tabs -->
  <div>
    <div class="title"><i></i> 疫情地图</div>
    <tabs :currentIndex="currentIndex" @onIndex="getIndexHandle">
      <tab index="chinaMap" label="中国地图"><div class="map" id="map"></div></tab>
      <tab index="worldMap" label="世界地图"><div class="map" id="worldMap"></div></tab>
    </tabs>
  </div>
</template>

<script>
//引入网络请求
import api from "../api/index";
export default {
  data() {
    return {
      currentIndex: "chinaMap",
    };
  },
  methods: {
    getIndexHandle(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    api
      .getProvince(
      //   {
      //   //挖数据接口需要的参数
      //   format:'json',
      //   appid:'16659',
      //   sign:'5b7b7dd2c15148de95f5bc87119c2c4c',
      // }
      )
      .then((res) => {
        // console.log(res);
        if (res.data.retdata) {
          //拿到数据
          //1. 拿到各省的数据，$charts里面需要的data是一个[{name:'',value:;}]这样格式的数据，要把res处理一下
          let ProNom = [];
          for (var i = 0; i < res.data.retdata.length; i++) {
            //循环把每个的省名称和现存确诊提出出来
            let temp = {
              name: res.data.retdata[i].xArea,
              value: res.data.retdata[i].curConfirm,
            };
            //每个加进去
            ProNom.push(temp);
          }
          //2. 把的到的符合格式的ProNom数据传入地图
          this.$charts.chinaMap("map", ProNom); //使用封装的echarts，加载地图在map元素上
        } else {
          //拿不到数据
          this.$charts.chinaMap("map");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getWorld()
      .then((res) => {
        // console.log(res);
        if (res.data.retdata) {
          //拿到数据
          //1. 拿到各省的数据，$charts里面需要的data是一个[{name:'',value:;}]这样格式的数据，要把res处理一下
          let ProNom = [];
          for (var i = 0; i < res.data.retdata.length; i++) {
            //循环把每个的省名称和现存确诊提出出来
            let temp = {
              name: res.data.retdata[i].xArea,
              value: res.data.retdata[i].curConfirm,
            };
            //每个加进去
            ProNom.push(temp);
          }
          //2. 把的到的符合格式的ProNom数据传入地图
          this.$charts.worldMap("worldMap", ProNom); //使用封装的echarts，加载地图在map元素上
        } else {
          //拿不到数据
          this.$charts.worldMap("worldMap");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
  },
};
</script>

<style scoped>
.map {
  width: 375px;
  height: 400px;
}
.title {
  /* width: 100%; */
  background: #fff;
  border-top: 1px solid #f1f1f1;
  padding: 1.16rem;
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
</style>