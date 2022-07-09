/**
 * @description 获取超链接的参数键值
 * @param {String} key 
 * @param {String} url 
 * @returns {String}
 */
export function queryString (key, url = window.location.href) {
  let val = url.match(new RegExp('[?&]' + key + '=([^&#]*)(&?)', 'i'));
  return val ? val[1] : val;
}

/**
 * @description 异步脚本
 * @param {String} src 
 * @returns {Promise}
 */
export function loadScript (src) {
  return new Promise((resolve, reject) => {
    let s = document.createElement('script');
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = src;
    s.addEventListener('load', resolve, false);
    s.addEventListener('error', e => reject(e), false);
    document.body.appendChild(s);
  });
}

/**
 * @description 设置微信分享
 * @param {Object} obj
 * @returns {undefined}
 */
export function setWechatShare (obj) {
  const src = process.env.NODE_ENV === 'production' ?
    `https://tech.c.citic/page/public/component/share.js?timestamp=${(new Date()).getTime()}` :
    `https://techtest.c.citic/page/public/component/share.js?timestamp=${(new Date()).getTime()}`;
  if (window.wxShare) {
    window.wxShare(obj)
  } else {
    loadScript(src)
      .then(() => window.wxShare(obj))
      .catch(e => console.log(e))
  }
}

/**
 * @description 判断是否微信环境
 * @returns {Boolean}
 */
 export function isWeixinBrowser() {
  const ua = window.navigator.userAgent;
  return ua.match(/MicroMessenger/i) == 'MicroMessenger';
}

/**
 * @description 格式化日期及获取赛季
 * @returns { String }
 */

export function dateFormat(date, isSeason= false, type) {
  if(typeof(date) == 'boolean') {
     date = new Date() 
     isSeason = true 
    } else if (date == 'hhmm') {
      date = new Date() 
      isSeason = false 
      type = 'hh:mm'
    }
  let time =  new Date(date) || new Date()
  const format = '-'
  const mapDate = {
    'y': time.getFullYear(),
    'm': time.getMonth() + 1 >= 10 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1),
    'd': time.getDate() >= 10 ? time.getDate() : '0' + time.getDate(),
    "h": time.getHours()>= 10 ? time.getHours() : ('0' + time.getHours()), //小时
    "mi": time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes(), //分
    "s": time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds(), //秒
    "q": Math.floor((time.getMonth() + 3) / 3), //季度
    "S": time.getMilliseconds() //毫秒
  }
  if( isSeason ){
    return mapDate['y'].toString() + mapDate['m'].toString()
  } 
  if(type) {
    return mapDate['h'] + ":" + mapDate['mi']
  }
  return mapDate['y'] + format + mapDate['m'] + format + mapDate['d']
}

export function timeFormat(date) {
  if(!date) return ''
  const time =  new Date(date)
  const format = '-'
  const mapDate = {
    'y': time.getFullYear(),
    'm': time.getMonth() + 1 >= 10 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1),
    'd': time.getDate() >= 10 ? time.getDate() : '0' + time.getDate(),
    "h": time.getHours()>= 10 ? time.getHours() : ('0' + time.getHours()), //小时
    "mi": time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes(), //分
    "s": time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds(), //秒
    "q": Math.floor((time.getMonth() + 3) / 3), //季度
    "S": time.getMilliseconds() //毫秒
  }
  return mapDate['y'] + format + mapDate['m'] + format + mapDate['d'] + " " + mapDate['h'] + ":" + mapDate['mi'] + ":" + mapDate['s']
}

// 判断安卓or IOS
export function userAgent() { 
  //  安卓true IOS-false
  const u = navigator.userAgent
  if(u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) return false
  return true
}

