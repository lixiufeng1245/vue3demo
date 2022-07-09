/*
 * @Author: leo
 * @FilePath: \yxj\src\http\http.js
 */
import axios from 'axios'
import { config, api } from "./api";
import { Toast } from 'vant';


const baseService = axios.create({
  baseURL: config.baseUrl,
  timeout: 5000,
});

let counter = 0;

baseService.interceptors.request.use(
  async function (config) {
    counter++ || Toast.loading({ duration: 0 });
    // const userToken = sessionStorage.getItem('lm_userToken');
    // const signature = window.requestHeaderSignature(config.data);
    // if (signature) {
    //   config.headers.Sign = signature.Sign;
    //   config.headers.Nonce = signature.Nonce;
    //   config.headers.Timestamp = signature.Timestamp;
    // }

    // if (userToken && config && config.data) {
    //   config.data.userToken = userToken;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

baseService.interceptors.response.use(
  function (response) {
    --counter === 0 && Toast.clear();
    const { data } = response;
    if (data && data.returnCode === "000000") {
      return data.data;
    } else {
      if (data && data.returnCode === "000072") {
        return data;
      } else {
        return data;
      }
    }
  },
  function (error) {
    if (error.message) {
      Toast("用户未登录");
    } else {
      Toast("网络异常，请稍后再试");
    }
    return Promise.reject(error);
  }
);
export const getUrl = ()=> {
  return baseService.get(api.queryCount, {config.exchangeId });
}
export const postUrl = () => {
  return baseService.post(api.queryCount, { config.exchangeId });
};


