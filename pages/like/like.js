
Page({

    data: {
        show:false,

    },

    onLoad: function (options) {

    },


    onPullDownRefresh: function () {
        console.log("---下拉刷新中---");
        // if (condition) {
            
        // }else{

        // }
        this.setData({
            show:true
        })
        
    },


    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }
})