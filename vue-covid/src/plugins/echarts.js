import echarts from 'echarts'
import nameMap from '../plugins/name'

//将$charts挂载到vue原型上
const install = function (Vue){
    Object.defineProperties(Vue.prototype,{
        $charts:{
            get(){
                return{
                    //中国地图
                    chinaMap:function(id,data){
                        //1. 找到元素，加载在元素上
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);


                        //2. 配置地图的内容
                        var option = {  
                            //提示框
                            tooltip:{
                                triggrOn:"click",   //事件类型
                                enterable:true,         //鼠标是否能滑入提示框
                                formatter(data){        //提示框显示的内容
                                    //用a进行路由跳转，传一个城市作为参数
                                    return `<a href='/#/city/${data.name}' style='color:#fff;'>省:${ data.name }<br/>病例:${data.value}个</a>`
                                }
                            },

                            //数据部分，觉映射组件
                            visualMap:[{
                                type:'piecewise',//断续状的
                                orient:'vertical',//方向是上下的
                                pieces:[    //配置的数据样式
                                    { min:0,max:0,color:"#fff" },
                                    { min:1,max:10,color:"#fdfdcf" },
                                    { min:11,max:100,color:"#fe9e83" },
                                    { min:101,max:1000,color:"#e55a4e" },
                                    { min:1001,max:100000,color:"#4f070d" }
                                ]
                            }],

                            //地图部分：系列列表。每个系列通过 type 决定自己的图表类型
                            series:[{
                                name:'中国地图',    
                                type:'map',     //类型是地图
                                map:'china',    //中国地图，在main引入了中国地图资源
                                roam:false,     //是否允许缩放
                                zoom:1.2,       //方法比例

                                label:{         //文本配置
                                    normal:{
                                        show:true,      //是否在地图上显示文本
                                        textStyle:{     //配置文本样式
                                            fontSize:8          //文本大小为8px
                                        }
                                    }
                                },
                                itemStyle:{     //每个item的样式
                                    normal:{            //地图的区域颜色，线和块的颜色
                                        areaColor:"rgba(0,255,236,0)",      //地区
                                        borderColor:"rgba(0,0,0,0.2)"       //边线
                                    },
                                    emphasis:{  //区域颜色和阴影
                                        areaColor:"rgba(255,180,0,0.8)",    
                                        shadowOffsetX:0,
                                        shadowOffsetY:0,
                                        shadowBlur:20,
                                        borderWidth:0
                                    }
                                },

                                // data:[  //设置的数据，和上面的数据样式匹配
                                //     {name:'广东',value:100}
                                // ]
                                data:data   //data数据是传进来的
                            }]
                        }

                        //3. 把配置的内容（option）set进创建的地图（图形）里面（myChart）
                        myChart.setOption(option)

                    },
                    //世界地图
                    worldMap:function(id,data){
                        //1. 找到元素，加载在元素上
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        //2. 配置地图的内容
                        var option = {  
                            //提示框
                            tooltip:{
                                triggrOn:"click",   //事件类型
                                enterable:true,         //鼠标是否能滑入提示框
                                formatter(data){        //提示框显示的内容
                                    return '国家或地区：'+data.name + '<br>' + '病例：'+data.value
                                }
                            },

                            //数据部分，觉映射组件
                            visualMap:[{
                                type:'piecewise',//断续状的
                                orient:'vertical',//方向是上下的
                                pieces:[    //配置的数据样式
                                    { min:0,max:0,color:"#fff" },
                                    { min:1,max:1000,color:"#fdfdcf" },
                                    { min:1001,max:100000,color:"#fe9e83" },
                                    { min:100001,max:1000000,color:"#e55a4e" },
                                    { min:1000000,max:100000000,color:"#4f070d" }
                                ]
                            }],
                            nameMap:nameMap,
                            //地图部分：系列列表。每个系列通过 type 决定自己的图表类型
                            series:[{
                                name:'世界地图',    
                                type:'map',     //类型是地图
                                map:'world',    //中国地图，在main引入了中国地图资源
                                roam:true,     //是否允许缩放
                                zoom:1.2,       //方法比例

                                label:{         //文本配置
                                    normal:{
                                        show:false,      //是否在地图上显示文本
                                        textStyle:{     //配置文本样式
                                            fontSize:8          //文本大小为8px
                                        }
                                    }
                                },
                                itemStyle:{     //每个item的样式
                                    normal:{            //地图的区域颜色，线和块的颜色
                                        areaColor:"rgba(0,255,236,0)",      //地区
                                        borderColor:"rgba(0,0,0,0.2)"       //边线
                                    },
                                    emphasis:{  //区域颜色和阴影
                                        areaColor:"rgba(255,180,0,0.8)",    
                                        shadowOffsetX:0,
                                        shadowOffsetY:0,
                                        shadowBlur:20,
                                        borderWidth:0
                                    }
                                },
                                // data:[  //设置的数据，和上面的数据样式匹配
                                //     {name:'广东',value:100}
                                // ]
                                data:data   //data数据是传进来的
                            }]
                        }

                        //3. 把配置的内容（option）set进创建的地图（图形）里面（myChart）
                        myChart.setOption(option)

                    },

                    
                    //城市地图
                    cityMap:function(id,data,cityName){
                        //1. 找到元素，加载在元素上
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);


                        //2. 配置地图的内容
                        var option = {  
                            //提示框
                            tooltip:{
                                triggrOn:"click",   //事件类型
                                enterable:true,         //鼠标是否能滑入提示框
                                formatter(data){        //提示框显示的内容
                                    return `城市:${ data.name }<br/>病例:${data.value}个`
                                }
                            },

                            //数据部分，觉映射组件
                            visualMap:[{
                                type:'piecewise',//断续状的
                                orient:'vertical',//方向是上下的
                                pieces:[    //配置的数据样式
                                    { min:0,max:0,color:"#fff" },
                                    { min:1,max:10,color:"#fdfdcf" },
                                    { min:11,max:100,color:"#fe9e83" },
                                    { min:101,max:1000,color:"#e55a4e" },
                                    { min:1001,max:100000,color:"#4f070d" }
                                ]
                            }],

                            //地图部分：系列列表。每个系列通过 type 决定自己的图表类型
                            series:[{
                                name:'省市地图',    
                                type:'map',     //类型是地图
                                map:cityName,    
                                roam:false,     //是否允许缩放
                                zoom:1.2,       //方法比例

                                label:{         //文本配置
                                    normal:{
                                        show:true,      //是否在地图上显示文本
                                        textStyle:{     //配置文本样式
                                            fontSize:8          //文本大小为8px
                                        }
                                    }
                                },
                                itemStyle:{     //每个item的样式
                                    normal:{            //地图的区域颜色，线和块的颜色
                                        areaColor:"rgba(0,255,236,0)",      //地区
                                        borderColor:"rgba(0,0,0,0.2)"       //边线
                                    },
                                    emphasis:{  //区域颜色和阴影
                                        areaColor:"rgba(255,180,0,0.8)",    
                                        shadowOffsetX:0,
                                        shadowOffsetY:0,
                                        shadowBlur:20,
                                        borderWidth:0
                                    }
                                },
                                // data:[  //设置的数据，和上面的数据样式匹配
                                //     {name:'广东',value:100}
                                // ]
                                data:data   //data数据是传进来的
                            }]
                        }

                        //3. 把配置的内容（option）set进创建的地图（图形）里面（myChart）
                        myChart.setOption(option)

                    },
                }
            }
        }
    })
}

//导出
export default install