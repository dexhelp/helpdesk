// helpdesk/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {},
  },

  formSubmit: function(e) {
    //console.log(e.detail.value)
    var user = this.data.user
    user.name = e.detail.value.name
    user.tel = e.detail.value.tel
    user.depart = e.detail.value.depart

    var db = wx.cloud.database()
    //上传数据
    if (user.flag == undefined) {
      //添加用户
      //设置用户为普通
      user.flag = "1"  
      db.collection('user').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
          user: user
        },
        success: function(res) {
          console.log("1")
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          wx.redirectTo({
            url: '../sucess/sucess'
          })
          var id = res._id
          user.id = id
          wx.setStorage({
            key: 'key_user',
            data: user,
          })
        }
      })
    } else {
      //更新用户
      console.log(user.id)
      const _ = db.command
      db.collection('user').doc(user.id).set({
        data: {
          user: user
        },
        success: function(res) {
          wx.redirectTo({
            url: '../sucess/sucess'
          })
          wx.setStorage({
            key: 'key_user',
            data: user,
          })
        }
      })
    }


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