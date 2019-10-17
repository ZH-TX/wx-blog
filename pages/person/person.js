// pages/person/person.js
Page({


    data: {
        
    },

    onLoad: function (options) {
       
    },
    toEditor(){
        wx.navigateTo({
            url: '../myeditor/myeditor',
            success: (result) => {
                
            },
            fail: () => {},
            complete: () => {}
        });
          
    }
   
})