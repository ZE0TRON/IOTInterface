$(document).ready(function(){
    $.get("api/getButtonStatus",{},(res)=>{
        console.log(res);
        if(res.status == 0){
            $('#buttonStatus').css('background-color','red');
            $('#buttonStatus').text("Off");
        }
        else if(res.status == 1){
            $('#buttonStatus').css('background-color','green');
            $('#buttonStatus').text("On");
        }
        else{
            console.log("no such ress");
        }
        });
});










