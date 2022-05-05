import axios from '../utils/require'
import base from './besaUrl'

//1.创建api
const api = {
    //2.网络请求
    //疫情数据的请求
    getNcov(params) {
        return axios.get(base.baseUrl + base.ncov, {
            params
        })
    },
    //各省市数据请求
    getProvince() {
        return axios.get(base.baseUrl + base.Province)
    },
    //各省市数据请求 别的接口
    // getProvince(params) {
    //     return axios.get(base.ProvincebaseUrl + base.Province, {
    //         params
    //     })
    // },

    //世界数据请求
    getWorld(params) {
        return axios.get(base.baseUrl + base.foreign, {
            params
        })
    },

    //省市请求
    getCity(params) {
        return axios.get(base.baseUrl + base.cityNcov, {
            params
        })
    },

    //疫情曲线图数据请求
    getNcovimg() {
        return axios.get(base.baseUrl + base.ncovimg)
    },

    //2级联动选择框，城市数据请求,wiki接口
    // getCitys(params){
    //     return axios.get(base.baseUrl + base.citys,{
    //         params
    //     })
    // },
    //2级联动选择框，城市数据请求,聚合接口
    getCitys(params){
        return axios.get(base.citysbaseUrl + base.citys,{
            params
        })
    },

    //疫情政策数据，聚合接口
    getCitysPolicy(params){
        return axios.get(base.citysbaseUrl + base.citysPolicy,{
            params
        })
    }
}
//3.导出api
export default api