// pages/daily/daily.js
Page({
    data: {
        pics: [],
        show: false,
        actions: [{
                name: '选项1'
            },
            {
                name: '选项2',
                subname: '描述信息',
                openType: 'share'
            }
        ]

    },


    onLoad (){
        wx.showShareMenu({
            withShareTicket: true
          })

    },
    addImg(){
        let that = this; 
        wx.chooseImage({
            count: 2, // 默认9
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success() {
                that.upload();
            }
        })
    },
    upload() {
        wx.showToast({
        icon: "loading",
        title: "正在上传"
        })
        // var tempFilePaths = res.tempFilePaths;
        //   for (var i = 0; i < tempFilePaths.length;i++){
        //     pics.push(tempFilePaths[i]);
        //   }
        //   console.log(pics);
        //   that.setData({
        //     pics: pics
        //   })
        // 
    },
    cancel(){
        console.log("取消成功")
    },
    addTag(){
        wx.showToast({
            title:"添加失败",
            icon:'loading',
            duration:2000
        })
       
    },
    onSelect(){
        console.log(this);
        this.addTag() 

    },
    onCancel(){
       this.setData({
           show:false
        })
    },
    send(){
        let that=this
        // wx.showModal({
        //     title: '提示',
        //     content: '确定是否发送',
        //    success (res) {
        //       if (res.confirm) {
        //         that.addTag()     
        //       } else if (res.cancel) {
        //         console.log('用户点击取消')
        //       }
        //     }
        // })
        wx.navigateTo({
            url: '../success/success',
            success: (result) => {
                
            },
            fail: () => {},
            complete: () => {}
        });
    },
    showPop() {
        this.setData({
            show: true
        });
    },
    onClose() {
        this.setData({
            show: false
        });
    }
})