//app.js

function get(url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      header: {
        "Content-Type": "json"
      },
      success: function (data) {
        resolve(data.data)
      },
      fail: function (error) {
        reject(error)
      }
    })
  })

}



App({
  onLaunch: function(options) {

  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          console.log(res)
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  },
  get(url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        header: {
          "Content-Type": "json"
        },
        success: function (data) {
          resolve(data.data)
        },
        fail: function (error) {
          reject(error)
        }
      })
    })

  }
})
