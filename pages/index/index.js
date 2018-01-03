// import { RGBaster} from '../../utils/rgbaster'
const {get} = getApp()

const COUNT = 20
const MAX_LENGTH = 250
// 变量不能放在这  不然切换页面的时候不是初始值
// let start = 0


Page({
  data: {
    filmList: [],
    start: 0
  },
  onLoad(data){
    console.log(data)
    this.ajaxFilmList()
  },
  loadMore(){
    (this.data.filmList.length < MAX_LENGTH) && this.ajaxFilmList()
  },
  ajaxFilmList() {
    wx.showLoading()
    const that = this
    get(`https://api.douban.com/v2/movie/top250?count=${COUNT}&start=${this.start}`)
      .then(data => {
        console.log(data)
        data.subjects.forEach(item => {
          item.directors = item.directors.map(director => director.name).join('/')
          item.casts = item.casts.map(cast => cast.name).join('/')
        })
        that.setData({
          filmList: that.data.filmList.concat(data.subjects)
        })
        wx.hideLoading()
      })
      // 每次请求就累加一次
    this.start += COUNT
  },
  goDetailPage(e){
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  }
})