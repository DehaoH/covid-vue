<template>
<!-- 出行政策模块 -->
  <div class="spring">
    <div class="title"><i></i> 疫情期间出行防疫政策</div>

    <!--  封装好的2级选择器组件，
    label是选择框前面的名字， 
    :options是选择框数据传给组件进行绑定  
    @getFrom=是选择后数据回传的自定义事件
    -->
    <Cascader label="出发城市" :options="options" @getFrom="getFrom" />
    <Cascader label="到达城市" :options="options" @getTo="getTo" />
    
    <!-- button按钮，通过a进行路由跳转 -->
     <a :href='this.href' @click="gethref($event)">
        <!-- vant的button效果，type类型 block增大-->
         <van-button class="btn" type类型="info" block>查看政策</van-button>
    </a>
  </div>
</template>

<script>
import Cascader from "./Cascader.vue";
import { Dialog } from 'vant';
import api from "../api/index";

export default {
  data() {
    return {
      options: [],
      fromId: 0,
      toId: 0,
      href:'#'
    };
  },
  components: {
    Cascader,
    Dialog,
  },
  methods: {
      //子传父，自定义事件，拿到选择的from城市
    getFrom(getFrom) {
      this.fromId = parseInt(getFrom.value);
      console.log(this.fromId);
    },
    //子传父，自定义事件，拿到选择的To城市
    getTo(getTo) {
      this.toId = parseInt(getTo.value);
      console.log(this.toId);
    },
    gethref(e){
          //选择城市后，进行a的路由跳转
        if(this.fromId>0){
            this.href = '/#/cityfto/'+this.fromId+'/'+this.toId;  //将拿到的2个城市数据，赋值给路由路径
            console.log(this.href);
        }else{
            //如果没有选择城市直接点击查询按钮，
            e.preventDefault(); //阻止a默认事件
            Dialog({ message: '请选择城市，再提交' });  //vant的消息框
        }
    }
  },
  mounted() {
    //网络请求，拿选择器中城市数据
    api
      .getCitys({
        // //wiki接口
        //   key:'171e165a7d991c5f6ecd5194c54778ef'

        // 聚合接口参数key=2817c9b91b6b863b9ca3294b74001f3a
        key: "2817c9b91b6b863b9ca3294b74001f3a",
      })
      .then((res) => {
        //需要的数据格式
        // {
        //   text: '浙江省',
        //   value: '330000',
        //   children: [{ 
        //      text: '杭州市',
        //      value: '330100' 
        //  }],
        // }

        //做数据格式转化，2层的格式，进行2成的提取和合并
        console.log(res);
        if (res.data.result) {
          let currentAll = [];//最终数据
          for (let i = 0; i < res.data.result.length; i++) {
            let citys = [];//城市数据
            for (let j = 0; j < res.data.result[i].citys.length; j++) {
              let temp = {  //提取城市数据
                text: res.data.result[i].citys[j].city,
                value: res.data.result[i].citys[j].city_id,
              };
              citys.push(temp);//合并城市数据
            }
            let temp2 = { //提前省份数据
              text: res.data.result[i].province,
              value: res.data.result[i].province_id,
              children: citys,
            };
            currentAll.push(temp2);//合并省份数据
          }
          this.options = currentAll;//赋值给options，传递给组件进行绑定
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
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

.spring {
  width: 100%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}

.btn{
    border-radius: 4px;
}
</style>