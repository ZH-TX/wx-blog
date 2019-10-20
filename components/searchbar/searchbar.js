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
        }


    },


    data: {

    },


    methods: {

        changeInput(){
            console.log(this.data);
                this.setData({
                isInput:!this.data.isInput
            })
        }

    }
})
