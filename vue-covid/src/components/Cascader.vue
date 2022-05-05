<template>
  <div>
  <!-- 出行政策的级联组件 -->
    <!-- 
        Cascader级联选择组件 
            1. v-model:表单输入绑定
            2. label:级联选择器前面的标题
            3. finish	全部选项选择完成后触发	{ value, selectedOptions, tabIndex }
            4. close	点击关闭图标时触发
            5. options 选择框的数据绑定
       -->
       <!-- 一级选择框 -->
    <van-field
      v-model="city"
      is-link
      readonly
      :label="label"
      placeholder="请选择所在地区"
      @click="show = true"
    />
       <!-- 二级选择框 -->
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "", //1级选择框的数据
      show: false,  //默认是关闭的
      cascaderValue: "",  //2级选择框的数据
    };
  },
  props: {
    options: {
      //数据，需要传递过来
      type: Array,
      defalut: () => {
        return {};
      },
    },
    label: {
      //显示在选择框前面的名字，在组件调用时候传递过来
      type: String,
      defalut: "",
    },
  },
  methods: {
    //直接拿官网的模版，选择完触发的事件，selectedOptions选择的参数
    onFinish({ selectedOptions }) {
      this.show = false;  //选择关闭
      this.city = selectedOptions.map((option) => option.text).join("/"); //选择的2级联动数据，放在选择框中显示：广东/广州

      //拿到选中的参数，传给父级做网络请求，做跳转
    //   console.log(selectedOptions);
      this.$emit('getFrom',selectedOptions[1])
      this.$emit('getTo',selectedOptions[1])
    },
  },
};
</script>

<style>
</style>