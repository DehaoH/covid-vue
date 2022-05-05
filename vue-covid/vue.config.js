module.exports = {
    devServer: {
        proxy: {
            '/api': {       //将域名地址改为   `/api`  代理
                target: 'https://vyps.api.storeapi.net',    //这里放要代理的域名
                changeOrigin: true,
                pathRewrite:{       //路径重写,设置api开头，后面""结尾的地址
                    "^/api":""    
                }
            },
            //2级联动城市数据跨域
            '/cityApi': {       //将域名地址改为   `/api`  代理
                target: 'http://apis.juhe.cn',    //这里放要代理的域名
                changeOrigin: true,
                pathRewrite:{       //路径重写,设置api开头，后面""结尾的地址
                    "^/cityApi":""    
                }
            }
        }
    }
}