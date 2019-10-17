// pages/myattention/myattention.js
Page({

    data: {
        isAttention:true,
        i:0,
        // isFollow:false,
        myFollowList:[
            {id:1, name:'凉生有幸',tag:'凉风有幸,秋月无边',src:'/assets/img/news/header1.png', isFollow:true},
            {id:2, name:'总喜欢你',tag:'我喜欢看飞鸟集',src:'/assets/img/news/header2.png', isFollow:true},
            {id:3, name:'竹盖子',tag:'前方是绝路,希望在转角',src:'/assets/img/news/header3.png', isFollow:true},
            {id:4, name:'业余正常人',tag:'冲天的橙子',src:'/assets/img/news/header2.png', isFollow:true} 
        ]   
    },
    // 可以id来进行判断
    toAttention(e){
        let id=e.currentTarget.dataset.id
        let index=this.data.i
        index=id-1
        let isFollow=this.data.myFollowList[index].isFollow;
            this.setData({
                isFollow:!isFollow
            })

        
        console.log(isFollow);
        
        // wx.showModal({
        //         title: '确定不再关注',
        //         content: '',
        //         showCancel: true,
        //         cancelText: '取消',
        //         cancelColor: '#000000',
        //         confirmText: '确定',
        //         confirmColor: '#F76E6D',
        //         success: (result) => {
        //             if (result.confirm) {
                       
                        
        //             }
        //         },
        //         fail: () => {},
        //         complete: () => {}
        //     })
        
    }
   
})