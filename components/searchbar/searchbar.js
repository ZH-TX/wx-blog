// components/searchbar.js
Component({

    properties: {
        searchClass:{
            type:String,
            value:''
        },
        viewInput:{
            type:String,
            value:''
        },
        isInput:{
            type:Boolean,
            value:false,
        },
        pholder:{
            type:String,
            value:'关键词,标签'  //默认值
        },
        search:{
            type:Function,
            value:null,
        }


    },


    data: {
        result:[]
    },


    methods: {

        changeInput(){
            console.log(this.data);
                this.setData({
                isInput:!this.data.isInput
            })
        },
        handleToanother(e){
            // console.log(e.detail);
            
            this.triggerEvent('test',e)
        },
        inputChange(e){
            this.setData({
                value:e.detail.value,
            }),
            this.data.search(e.detail.value).then((res)=>{
                this.setData({
                    result:res,
                })
    
            })

        },
        

    }
})
