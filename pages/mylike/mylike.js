// pages/mylike/mylike.js
Page({

    data: {
        isActive:false
    },

    onLoad: function (options) {

    },
    changeImg(){
        wx.showModal({
            title: '',
            content: '确定取消点赞?',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#F87674',
            success: (result) => {
                if (result.confirm) {
                    this.setData({
                        isActive:!this.data.isActive
                    })
                }
            },
            fail: () => {},
            complete: () => {}
        });
          
        
    }
 
    
})