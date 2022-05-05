## 使用结构
<tabs :currentIndex="index" @onIndex="changeHandle">
    <tab index="1" label="导航一">内容1</tab>
    <tab index="2" label="导航二">内容2</tab>
    <tab index="3" label="导航三">内容3</tab>
</tabs>


## 渲染结构
<div>
    <div>
        <ul>
            <li>导航1</li>
            <li>导航2</li>
            <li>导航3</li>
        </ul>
    </div>
    <div>
        <div>内容1</div>
        <div>内容2</div>
        <div>内容3</div>
    </div>
</div>

## Vue化开发
入口文件:index.js
组件:tabs、tab、content


## 组件之间的关系
tabs -> tab:在我们封装组件中，他俩之间是通过slots进行处理的
tabs -> content:引用关系
tab -> content:在我们封装组件中，他俩之间是通过slots进行处理的


## 组件之间的关系
1. $slots:插槽
2. $parent:边界管理-> 儿子通过$parent读取父级的属性和方法
3. props
4. 自定义事件:$emit



## 使用示例
1. 引入index

2. 视图结构
<tabs :currentIndex="currentIndex" @onIndex="getIndexHandle">
    <tab index="1" label="中国地图"><div>内容1</div></tab>
    <tab index="2" label="世界地图"><div>内容2</div></tab>
    <tab index="3" label="我的地图"><div>内容3</div></tab>
</tabs>

3. js逻辑
```js
export default {
  data(){
    return{
      currentIndex:1
    }
  },
  methods:{
    getIndexHandle(index){
      this.currentIndex = index
    }
  }
}
```