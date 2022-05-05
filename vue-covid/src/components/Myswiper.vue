<template>
<!-- 疫情趋势图模块 -->
  <div class="swiper">
    <div class="title"><i></i> 全国</div>
    <div>
      <!-- swiper组件 -->
      <!-- 
        :options="swiperOptions"  轮播图属性
       -->
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in swiperData" :key="index">
          <img :src="item.image" alt="" />
        </swiper-slide>
      </swiper>

        <!-- 下面的文字 -->
      <ul class="navigator">
        <li
          @click="chlckItem(index)"
          :class="{ active: index === currentIndex }"
          class="navigatorItem"
          v-for="(item, index) in swiperData"
          :key="index"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//引入swiper组件
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
//引入swiper样式
import "swiper/swiper-bundle.css";
//引入网络请求
import api from "../api/index";

export default {
  data() {
    let _that = this; //on里面读不到this，先指定一个_that
    return {
      swiperData: [], //请求的数据放这里
      currentIndex: 0, //文字高亮匹配index，拿来给文字和图片做匹配的id

      //轮播图属性
      swiperOptions: {
        on: {
          slideChangeTransitionEnd: function () {   //轮播图滑动触发的函数，滑动轮播图，文字跟着高亮
            _that.currentIndex = this.activeIndex; //让轮播图的id（this.activeIndex），赋值给匹配id，下面的文字跟着改变高亮
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper; //获取swiper，mySwiper是上面定义的ref，处理后用this.swiper
    },
  },
  methods: {
    //点击下面的文字，图片跟着切换的事件
    chlckItem(index) {  //这个id是点击的文字的id
      this.currentIndex = index;  //文字高亮匹配id也跟着index换
      this.swiper.slideTo(index, 1000, false);  //通过下面文字的index，设置swiper的index，就是点下面文字上面图片跟着切换
    },
  },
  mounted() {
    api
      .getNcovimg()
      .then((res) => {
        if (res.status === 200) {
          this.swiperData = res.data.result;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.swiper {
  background: #fff;
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
img {
  width: 375px;
  height: auto;
}
.navigator {
  font-size: 0.12rem;
  list-style: none;
  display: flex;
  padding: 0 0.16rem;
  justify-content: center;
  margin: 0.06rem 0 0;
}
.navigatorItem {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
  width: calc(20% - 0.5rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
  margin-left: 0.5rem;
}
.active {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
}
</style>