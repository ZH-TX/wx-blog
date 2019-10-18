import Toast from '../../weui/vant-weapp/toast/toast'
const app = getApp()

Page({
	data: {
		isRefresh: false,
		isInput: false,
		isActive:false,
		isPull:false,
		value:'',
		value2:'',
		isComment:false,
		isContent:false,
		overHeight:false,

	},

	onShareAppMessage(res) {
		if (res.from === 'button') {
		  // 来自页面内转发按钮
		  console.log(res.target)
		}
		return {
		  title: '自定义转发标题',
		  path: '/page/user?id=123',
		  success:()=>{
			  wx.showToast({
				  title: '转发成功',
				  icon: 'success',
				  image: '',
				  duration: 1500,
				  mask: false,
				  success: (result) => {
					  
				  },
				  fail: () => {},
				  complete: () => {}
			  });
				
		  }
		}
	  },
	onLoad() {
		this.getTopics(true)
		// this.setData({
		// 	search: this.search.bind(this),
		// })
	},
	follow(){
		Toast({
			position:'bottom',
			message:"关注成功",
			duration:1000,
		})
	},
	chat(){
		Toast({
			position:'bottom',
			message:"暂时没有这个功能哦",
			duration:1000,
		})
	},
	navToProfile(){
		wx.switchTab({
			url: '../person/person',
			success: (result) => {
				
			},
			fail: () => {},
			complete: () => {}
		});
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
	blur(e){
		// console.log(e)
		this.setData({
			isInput: false,
			isComment:false
		})
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
	navTo(){
		
		wx.navigateTo({
			url: '../detail/detail',
			success: (result) => {
				
			},
			fail: () => {},
			complete: () => {}
		});
		wx.showToast({
			title:'数据加载中...',
			icon:'loading',
			duration: 2000
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