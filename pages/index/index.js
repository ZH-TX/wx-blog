//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		isRefresh: false,
		isInput: false,
		isActive:false,
		isPull:false,
		value:'',
		value2:'',
		isComment:false

	},

	onShareAppMessage(res) {
		if (res.from === 'button') {
		  // 来自页面内转发按钮
		  console.log(res.target)
		}
		return {
		  title: '自定义转发标题',
		  path: '/page/user?id=123'
		}
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
		wx.showActionSheet({
			itemList: ['A', 'B', 'C'],
			success (res) {
			  console.log(res.tapIndex)
			},
			fail (res) {
			  console.log(res.errMsg)
			}
		  })
		  
		// console.log(e);
		// wx.requestPayment({
		// 	timeStamp: '',
		// 	nonceStr: '',
		// 	package: '',
		// 	signType: 'MD5',
		// 	paySign: '',
		// 	success(res) {},
		// 	fail(res) {}
		// })

	},
	pull(){
		this.setData({
			isPull:!this.data.isPull
		})
	},
	changeInput(e){
		// console.log(e.detail.value);
		this.setData({
			value:e.detail.value
		})

	},
	tap(e) {
		this.setData({
			isInput: true  //!this.data.isInput
		})

	},
	cancel(){
		this.setData({
			isInput:false,
			value:null
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
	sendComment(){
		this.setData({
			isComment:true
		})
	},
	sendInfo(){
		wx.showToast({
			title:"发送中",
			icon:"loading",
			duration:2000,
			success(){},
			fail (){},
			complete(){}
		})
		this.setData({
			value2:null,
			isComment:false
		})
	}
})