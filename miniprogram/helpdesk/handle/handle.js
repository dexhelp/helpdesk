// helpdesk/handle/handle.js
var util = require('../comm/comm.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    textarea: {
      number: "0",
      max: "100"
    },
    infoid: {},
    user: {}
  },

  kindToggle: function(e) {
    var info = this.data.info
    for (var i = 0; i < info.length; ++i) {
      if (info[i]._id == e.currentTarget.id) {
        info[i].info.who.check = !info[i].info.who.check
      } else {
        info[i].info.who.check = false
      }
    }
    this.setData({
      info: info
    })
  },

  textareainputs: function(e) {
    var id = e.currentTarget.id
    var value = e.detail.value
    var info = this.data.info
    for (var i = 0; i < info.length; ++i) {
      if (info[i]._id == id) {
        info[i].info.handle.howtodo = value
        this.data.infoid = info[i]
      }
    }
  },

  closewd: function(e) {
    //添加一个等待更新的提示
    //
    var that = this
    var id = e.currentTarget.id
    var info = this.data.info
    //更新info数据，提高用户体验
    for(var i = 0;i<info.length;++i){
      if(info[i]._id == id){
        delete info[i]
      }
    }
    //info数组中有空数据，会导致未知错误，清楚空数据
    var temp = []
    for (var j in info) {
      temp[j]=info[j]
    }
    //上传这个数据this.data.infoid
    var info = this.data.infoid
    var handle = info.info.handle
    //更新时间
    var myDate = new Date();
    var date = util.sysDate('date');
    var time = util.sysDate('time');
    var infotime = date + " " + time
    handle.endtime = infotime
    //更新helper
    var user = this.data.user
    handle.helper = user.name
    //更新云数据
    wx.cloud.callFunction({
      // 云函数名称
      name: 'update',
      // 传给云函数的参数
      data: {
        id: id,
        handle: handle
      },
      success: function(res) {
        //更新用户界面
        that.setData({
          info:temp
        })
      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    const db = wx.cloud.database()
    db.collection('info').where({
        info: {
          step: "审核中，请等待"
        }
      })
      .get({
        success: function(res) {
          // res.data 是包含以上定义的两条记录的数组
          that.setData({
            info: res.data
          })
        }
      })
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