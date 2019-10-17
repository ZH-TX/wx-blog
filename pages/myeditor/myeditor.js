// pages/myeditor/myeditor.js
Page({


    data: {
        value1: '玛丽缇娜',
        value2: '常在河边走,哪有不湿鞋',
        sex: 1,//1男 0女
    },

    onLoad: function (options) {

    },
    changeSex() {
        let that = this
        wx.showModal({
            title: '提示',
            content: '你确定要修改性别吗',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
            success: (result) => {
                if (result.confirm) {
                    that.setData({
                        sex: 1 - this.data.sex
                    })
                }
            },
            fail: () => { },
            complete: () => { }
        });

    }

})