// pages/detail/detail.js
const { get } = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    film: {},
    isShowExpandBtn: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const id = options.id
    console.log(options)
    const id = options.id || '1292052'
    this.ajaxFilmDetail(id)
  },
  ajaxFilmDetail(id){
    wx.showLoading()
    const that = this
    get(`https://api.douban.com//v2/movie/subject/${id}`)
      .then(data => {
        console.log(data)
        data.countries = data.countries.join(' / ')
        data.genres = data.genres.join(' / ')
        
        data.summary.length <= 100
        data.summaryFrag = data.summary.slice(0,100)
        data.directorsAndCasts = data.directors.concat(data.casts)
        that.setData({
          film: data,
          isShowExpandBtn: data.summary.length > 100
        })
        wx.setNavigationBarTitle({
          title:data.title
        })
        wx.hideLoading()
      })
  },
  expandSummary(){
    const that = this
    this.setData({
      'film.summaryFrag':that.data.film.summary,
      isShowExpandBtn:false
    })
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