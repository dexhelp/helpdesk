// helpdesk/help/help.js
var util = require('../comm/comm.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classarr: ["网络", "电脑", "打印机", "其它"],
    index: "0",
    user: {},
    info: {},
  },

  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },

  formSubmit: function(e) {
    // console.log(e.detail.value)
    var user = this.data.user
    var info = {}
    info.who = {}
    info.who.name = e.detail.value.name
    info.who.tel = e.detail.value.tel
    info.who.info = e.detail.value.info
    info.who.classarr = this.data.classarr[this.data.index]
    var myDate = new Date();
    var date = util.sysDate('date');
    var time = util.sysDate('time');
    var infotime = date + " " + time
    info.who.time = infotime
    info.who.colour = "审核中，请等待"
    var handle = {helper: "0", starttime: "", endtime: "", howtodo: "", colour:"已结案，未评价"}
    info.handle=handle
    var result = { howabout: "", check: "结案", colour: "", evaluation:""}
    info.result=result

    info.step=info.who.colour

    // console.log(info)
    var db = wx.cloud.database()

    db.collection('info').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
        info: info
      },
      success: function(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        wx.redirectTo({
          url: '../sucess/sucess'
        })
      }
    })
  },







  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getStorage({
      key: 'key_user',
      success: function(res) {
        that.setData({
          user: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})