// helpdesk/query/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    back: {
      radioItems: [{
          name: '解决',
          value: '0'
        },
        {
          name: '未解决',
          value: '1',
          checked: true
        }
      ],
    }
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.back.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      "back.radioItems": radioItems
    });

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








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    try {
      var openid = wx.getStorageSync('openid')
      if (openid) {
        // Do something with return value
      }
    } catch (e) {
      // Do something when catch error
    }
    const db = wx.cloud.database()
    db.collection('info').where({
        _openid: openid,
      })
      .get({
        success: function(res) {
          // res.data 是包含以上定义的两条记录的数组
          that.setData({
            info: res.data
          })
        }
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