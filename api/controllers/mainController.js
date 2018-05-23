var statsModel = require('../models/statsModel');
exports.homePage = (req,res) => {
    res.render('home',{
        title:'home'
    });
}

exports.getButtonStatus = (req,res) => {
    statsModel.getButtonStatus().then((status)=>{
        res.send({status:status});
    });
}

exports.setButtonStatus = (req,res) => {
    statsModel.setButtonStatus(req.body.status,req.body.authToken).then((msg)=>{
        res.send({message:msg});
    })
}