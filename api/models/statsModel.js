const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var statsModelSchema = new Schema({
    name:String,
    status:Number,
    authToken:String,
});
var statsModel = mongoose.model('statsModel',statsModelSchema);

exports.getButtonStatus = () => {
    return new Promise((resolve,reject)=>{
        statsModel.find({'name':'button'},'status',(err,status)=>{
            if(err) {console.log(err);return;}
            resolve(status[0].status);
        });
    });
}

exports.setButtonStatus = (value,postToken) => {
    return new Promise((resolve,reject)=>{
        statsModel.find({'name':'button'},'authToken',(err,authToken)=>{
            if(err){console.log(err); resolve('err'); return;};
            if(postToken === authToken[0].authToken){
                console.log(value);
                statsModel.update({'name':'button'},{$set:{status:value}},(err)=>{
                    if(err){console.log(err); resolve('err'); return;};
                    resolve('succes');
                });
            }
            else{
                console.log(authToken[0].authToken);
                console.log(postToken);
                resolve('invalidToken');
            }
        });
        
    });
}