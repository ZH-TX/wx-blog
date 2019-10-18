// pages/myeditor/myeditor.js

import Dialog from '../../weui/vant-weapp/dialog/dialog';

Page({


    data: {
        pics:["/assets/img/home/head.png"],
        value1: '玛丽缇娜',
        value2: '常在河边走,哪有不湿鞋',
        sex: 1,//1男 0女
        show:false,
        radio: '1',
    },

    onLoad: function (options) {

    },
    changeImg(e){
        console.log(e);
        let index = e.currentTarget.dataset.index;
        let pics = this.data.pics
        wx.previewImage({
        current: pics[index],
            urls: pics
        })
    },
    cancel(){
        wx.switchTab({
            url: '../person/person',
            success: (result) => {
                
            },
            fail: () => {},
            complete: () => {}
        });
          
    },
    onChange(event) {
        this.setData({
          radio: event.detail
        });
      },
    
      onClick(event) {
        const { name } = event.currentTarget.dataset;
        this.setData({
          radio: name
        });
      },
    onClose(){
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
                    this.onClick
                    this.setData({
                        sex: 1 - this.data.sex
                    })
                }else{
                    this.onChange
                }
            },
            fail: () => { },
            complete: () => {
                this.setData({show:false})
             }
        });
        
    },
    changeSex() {
        this.setData({show:true})
        // let that = this
       
        

    }

})