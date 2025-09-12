import axios from "axios";
import {ref} from "vue";
import qs from 'qs';

/*
params: URL 查询参数，将其序列化为查询字符串并附加到请求 URL。例如：params: { userId: 1, sort: 'asc' }
headers: 自定义请求头，例如 Authorization 头：headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
timeout: 请求超时的时间，单位为毫秒。timeout: 5000 // 5秒超时
responseType: 指定响应类型（如 'json', 'text', 'blob', 'arraybuffer', 'document'）。
withCredentials: 指定是否跨域请求时是否需要使用凭证（如 Cookies）。
validateStatus: 自定义请求状态码的成功范围。默认情况下，2xx 状态码会被视为成功。
 */

/*
async和await共同使用：以同步的方式编写异步代码
await会暂停函数执行：当执行到await表达式时，函数的执行会被暂停，直到Promise解决（resolved）或拒绝（rejected）。
 */
export async function axiosPost(url, data) {
    console.log('开始ajax执行');
    let responseData = ref(null);
    let errorData = ref(null);
    console.log('data::::::::'+data);
    await axios.post('/api' + url, data, {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout:5000,
    }).then(res => {
        responseData.value = res;
    }).catch(err =>{
        errorData.value = err;
    });
    console.log('结束ajax执行');
    return {
        responseData,
        errorData
    }
    
}
//TODO 存在axios拦截器，可以用来添加token验证信息
axios.interceptors.request.use(
    config => {
        // 在这里添加token或其他配置
        const token = sessionStorage.getItem('token');
        console.log('token::::::' + token);
        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
            // config.params
            // config.timeout
            // config.responseType
        }
        return config;
    },
    error => {
        return Promise.reject(error); //会捕获错误并返回一个拒绝的 Promise
    }
);
axios.interceptors.response.use(
    response => {
        // 对响应数据进行处理
        return response.data
    },
    error => {
        //对响应错误进行处理
        if(error.response && error.response.status === 401){
            // 处理401错误，例如跳转到登录页面
        }
        return Promise.reject(error);
    }
);
//移除拦截器
//axios.interceptors.request.eject(const xxx = axios.interceptors.request.use(...));