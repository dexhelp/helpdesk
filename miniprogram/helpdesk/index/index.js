Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: "help", name: "求助", picture: "icon_nav_z-index.png" },
      { id: "setting", name: "设置", picture: "icon_nav_form.png" },
      { id: "query", name: "查询", picture: "icon_nav_form.png" },
      { id: "handle", name: "处理", picture: "icon_nav_form.png" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  kindToggle: function (e) {
    //console.log(e.currentTarget)
    var id = e.currentTarget.id
    //console.log(id)
  }
})