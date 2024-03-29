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
		search:'',
		result:[],
		content:[
			{	
				id:0,
				src:["/assets/img/home/AI.png","/assets/img/home/AI2.png"],
				title:"AI技术在智能海报设计中的应用越来越广泛",
				tag:["AI","计算机视觉","算法"],
				time:'2019.10.10',
				likeImg:["/assets/img/home/head3.png","/assets/img/home/head4.png","/assets/img/home/head5.png","/assets/img/home/head5.png"],
				isLike:false,
				comment:[
						{name:'华美',talk:'写的很好的'},
						{name:'Jerry',talk:'是啊'},
						{name:'经济的橙子',talk:'不错'},
						{name:'华美',talk:'很好的'}
					// name:['华美','Jerry','进击的橙子','华美',],
					// talk:['写的狠吧昂','是啊','写的昂','哈哈哈']
				]
			},
			{
				id:1,
				src:["/assets/img/home/AI.png","/assets/img/home/AI2.png"],
				title:"AI技术在智能海报设计中的应用越来越广泛",
				tag:["AI","计算机视觉","算法"],
				time:'2019.10.10',
				likeImg:["/assets/img/home/head3.png","/assets/img/home/head4.png","/assets/img/home/head5.png","/assets/img/home/head5.png"],
				isLike:false,
				comment:[
						{name:'华美',talk:'写的很好的'},
						{name:'Jerry',talk:'是啊'},
						{name:'经济的橙子',talk:'不错'},
						{name:'华美',talk:'很好的'}
					// name:['华美','Jerry','进击的橙子','华美',],
					// talk:['写的狠吧昂','是啊','写的昂','哈哈哈']
				],
			}
		]

	},
	lastSearch:Date.now(),

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
		this.setData({
			search: this.search.bind(this),
		})
	},
	
	search(value) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(
					[{
					text: '搜索结果',
					value: 1
				}, 
				{
					text: '搜索结果2',
					value: 2
				}])
			}, 200)
		})
	},
	selectResult: function (e) {
        console.log('select result', e.detail)
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
	changeImg(e){
		console.log(e);
		let index=e.currentTarget.dataset['index']
		this.setData({
			[`content[${index}].isLike`]:!this.data.content[index].isLike
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
		console.log(this.data.result);
		if(Date.now()-this.lastSearch>500){
			this.search(e.detail.value).then((result)=>{
				this.setData({
					result:result
				})
				
			}).catch((err)=>{
				throw err
	
			})
		}
		
		this.setData({
			value:e.detail.value,
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