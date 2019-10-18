// pages/mydraft/mydraft.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    onLoad: function (options) {

    },
    navToDetail(){
        wx.navigateTo({
            url: '../mydraftDetail/mydraftDetail',
            success: (result) => {
                
            },
            fail: () => {},
            complete: () => {}
        });
          
    }

})