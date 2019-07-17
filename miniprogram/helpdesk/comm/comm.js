//util.js

//封装的函数
function sysDate(str){
  var oDate = new Date(); //实例一个时间对象；
  oDate.getFullYear();   //获取系统的年；
  oDate.getMonth() + 1;   //获取系统月份，由于月份是从0开始计算，所以要加1
  oDate.getDate(); // 获取系统日，
  oDate.getHours(); //获取系统时，
  oDate.getMinutes(); //分
  oDate.getSeconds(); //秒
  var date = oDate.getFullYear() + "-" + (oDate.getMonth()+1) + "-" + oDate.getDate()
  var time = oDate.getHours() + ":" + oDate.getMinutes() + ":" + oDate.getSeconds()
  if(str=="date"){
    return date
  }
  else if(str=="time"){
    return time
  }else{
    return "date or time,please enter"
  }
  
}
//转化成小程序模板语言 这一步非常重要 不然无法正确调用
module.exports = {
  sysDate: sysDate
}