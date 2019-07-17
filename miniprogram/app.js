//app.js

App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}

    wx.cloud.callFunction({
      // 云函数名称
      name: 'login',
      // 传给云函数的参数
      // data: {
      //   a: 1,
      //   b: 2,
      // },
      success: function (res) {
        wx.setStorage({
          key: 'openid',
          data: res.result.openid,
        })
      },
      fail: console.error
    })
  }
})
