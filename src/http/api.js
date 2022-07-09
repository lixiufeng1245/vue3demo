/*
 * @Author: leo
 * @FilePath: \yxj\src\http\api.js
 */
/**
 * @description 请求地址上下文
 * @param {String} userPrefix 用户体系上下文
 * @param {String} lotteryPrefix 活动抽奖上下文
 */
  const prd = {
    baseUrl: "https://one.citic.com",
    activityId: "1098035147017032114", //
    exchangeId: "1098035147017032115",
  };
  const test = {
    baseUrl: "https://onetest.citic.com",
    activityId: "1098035147017032114", //
    exchangeId: "1098035147017032115",
  };
  console.log(process.env.NODE_ENV)
export const config = process.env.NODE_ENV === 'production' ?prd:test

/**
 * @description 接口地址
 * @param {String} getToken 获取用户体系access_token
 * @param {String} getAllGiftsByChannel 获取当前活动所有礼品
 * @param {String} receiveGiftById 通过id领取奖品
 * @param {String} selectGiftById 通过活动id领取奖品（抽奖平台）
 */
export const api = {
  getToken: '/oauth/token',
}