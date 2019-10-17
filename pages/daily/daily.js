// pages/daily/daily.js
Page({
    data: {
        pics: [],
        show: false,
        isSend:false,
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
            count: 3, // 默认9
            sizeType: ['compressed'], 
            sourceType: ['album', 'camera'], 
            success:res=> {
                // console.log(res);
                that.upload()
                let tempFilePaths = res.tempFilePaths;
                for (let i = 0; i < tempFilePaths.length;i++){
                    that.data.pics.push(tempFilePaths[i]);
                }
                console.log(this.data.pics)
                that.setData({
                    pics:this.data.pics
                })
            }     
        })
    },
     // 删除图片
    deleteImg(e) {
        let that=this
        let pics = this.data.pics
        let index = e.currentTarget.dataset.index;
        wx.showModal({
            title: '提示',
            content: '你想删除图片吗',
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                
                pics.splice(index, 1);
                that.setData({
                    pics
                })

              } else if (res.cancel) {
                console.log('用户点击取消')
                // let index = e.currentTarget.dataset.index;
                // let pics = that.data.pics
                wx.previewImage({
                    current: pics[index],
                    urls: pics
                })
              }
            }
          })
        
   },
   // 预览图片
    previewImg(e) {
        let index = e.currentTarget.dataset.index;
        let pics = this.data.pics
        wx.previewImage({
        current: pics[index],
            urls: pics
        })
   },
  
    upload() {
        wx.showToast({
        icon: "loading",
        title: "正在上传"
        })
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
        this.setData({
            isSend:true
        })

        //带提示的
        // let that=this
        // wx.showModal({
        //     title: '提示',
        //     content: '确定是否发送',
        //    success (res) {
        //       if (res.confirm) {
        //         that.addTag()
        //         that.setData({
        //             isSend:true
        //         })

        //       } else if (res.cancel) {
        //         console.log('用户点击取消')
        //       }
        //     }
        // })
        
    },
    returnHome(){
        wx.switchTab({
            url: '../index/index',
            success: (result) => {
                
            },
            fail: () => {},
            complete: () => {}
        });
          
    },
    returnBack(){
        wx.reLaunch({
            url: '../daily/daily',
            success: (result) => {
                
            },
            fail: () => {},
            complete: () => {}
        });
          
    },
    showPop() {
        wx.showModal({
            title: '提示',
            content: '是否保存',
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
    },
    onClose() {
        this.setData({
            show: false
        });
    }
})