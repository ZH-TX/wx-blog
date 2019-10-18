// pages/comment/comment.js
Page({

	data: {
		showInput: false,
		inputMessage: ''
	},

	//   goback() {
	//     wx.navigateBack({
	//       success(res) {
	//         console.log("返回成功")
	//       },
	//       fail(res) {
	//         console.log("error")
	//       }
	//     })
	//   },

	showInput: function () {
		this.setData({
			showInput: true
		})
	},
	onHideInput: function () {
		this.setData({
			showInput: false
		})
	},
	// 双向数据绑定
	inputValue(e){
		console.log(e);
		this.setData({
			inputMessage:e.detail.value
		})
	},
	inputSend() {
		let msg=this.data.inputMessage
		if(msg){
			wx.showToast({
				title: '发送中...',
				icon: 'none',
				image: '',
				duration: 1500,
				mask: false,
				success: (result) => {
					
				},
				fail: () => {},
				complete: () => {}
			});
			  
		}else{
			wx.showToast({
				title: '亲, 你还没没有评论呢',
				icon: 'none',
				image: '',
				duration: 1500,
				mask: false,
			});
			  
		}

	}


})