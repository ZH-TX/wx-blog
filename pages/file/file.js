// pages/file/file.js
Page({
    data: {
 
    },

    onLoad: function (options) {

    },
    navToDetail(){
        wx.navigateTo({
            url: '../detail/detail',
            success: (result) => {
                
            },
            fail: () => {},
            complete: () => {}
        });
          
    }
   
})