// pages/comment/comment.js
Page({

    data: {
        showInput: false, 
        inputMessage:''
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
     
      showInput: function() {
        this.setData({
          showInput: true
        })
      },
      onHideInput: function() {
        this.setData({
          showInput: false
        })
      },
     

})