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


    onLoad: function (options) {

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