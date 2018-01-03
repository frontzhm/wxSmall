// pages/search/search.js
const { get } = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmList:[]
  },
  search(e){
    console.log(e.detail.value)
    this.ajaxSearch(e.detail.value)
  },
  ajaxSearch(cnt){
    wx.showLoading()
    const that = this
    get(`https://api.douban.com/v2/movie/search?q=${cnt}`)
      .then(data => {
        console.log(data)
        data.subjects.forEach(item => {
          item.directors = item.directors.map(director => director.name).join('/')
          item.casts = item.casts.map(cast => cast.name).join('/')
        })
        that.setData({
          filmList: data.subjects
        })
        wx.hideLoading()
      })
  },

  goDetailPage(e){
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
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
  
  }
})