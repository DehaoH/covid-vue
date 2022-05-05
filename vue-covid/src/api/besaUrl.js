//1. 创建base
const base = {
    //2.设置请求地址
    baseUrl : "http://iwenwiki.com",
    ncov:"/wapicovid19/ncov.php",   //疫情高风险地区和确诊人数接口

    Province:'/wapicovid19/all.php' , //全国疫情情况接口
    foreign:'/wapicovid19/foreign.php',

    cityNcov:'/wapicovid19/guonei.php', //省市疫情数据

    ncovimg:'/wapicovid19/ncovimg.php', //疫情曲线图

    
    //2级联动选择框的城市数据接口，聚合接口
    //http://apis.juhe.cn/springTravel/citys?key=2817c9b91b6b863b9ca3294b74001f3a
    citysbaseUrl:'/cityApi',
    citys:'/springTravel/citys', //聚合接口
    // citys:'/wapicovid19/citys.php', //wiki接口
    
    

    //疫情出现政策请求，聚合接口
    //http://apis.juhe.cn/springTravel/query?key=2817c9b91b6b863b9ca3294b74001f3a&from=10017&to=10032
    citysPolicy:'/springTravel/query',



    //挖数据的接口
    // ProvincebaseUrl : "/api",
    // Province:'/api/94/219'
}
//3.导出base
export default base