//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		isRefresh: false,
		isInput: false,
		isActive:false

	},

	onLoad() {
		this.getTopics(true)
		// this.setData({
		// 	search: this.search.bind(this),
		// })
	},
	getTopics(isRefresh) {
		let that = this
		setTimeout(() => {
			that.setData({
				isRefresh: true
			})

		}, 2000)
	},
	changeImg(){
		this.setData({
			isActive:!this.data.isActive
		})

	},
	shareLink(e) {
		console.log(e);
		wx.requestPayment({
			timeStamp: '',
			nonceStr: '',
			package: '',
			signType: 'MD5',
			paySign: '',
			success(res) {},
			fail(res) {}
		})

	},

	tap(e) {
		this.setData({
			isInput: true  //!this.data.isInput
		})

	},
	cancel(){
		this.setData({
			isInput:false
		})
	},
	search(value) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve([{
					text: '搜索结果',
					value: 1
				}, {
					text: '搜索结果2',
					value: 2
				}])
			}, 200)
		})
	},
	selectResult(e) {
		console.log('select result', e.detail)
	},
	addMore(e) {
		console.log(e);


	}
})