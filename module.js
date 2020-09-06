const mongoose =require ('mongoose')
const usererschema =  mongoose.schema({
    name: {
        Type:String,
        required:True
    },
})
description:{
    type:String,
    required:true
}


Date:{
    type:Date,
    Default: Date.now
};
modules.exports = mongoose.modules('userser',userschema)

